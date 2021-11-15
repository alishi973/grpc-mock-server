const grpc = require("@grpc/grpc-js");
const protobufjs = require("protobufjs");
const protoLoader = require("@grpc/proto-loader");
const fs = require("fs");

const MOCK_SERVER_ADDRESS = "127.0.0.1:50051";
const MOCKED_JSON_FILE = "./mock-response.json";
const protofileAddress = "./proto/user_service.proto";

const mockedData = JSON.parse(fs.readFileSync(MOCKED_JSON_FILE));

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const server = new grpc.Server();

// Can use with foreach for bulk files
const loadedProtoFile = protoLoader.loadSync(protofileAddress);

const service = grpc.loadPackageDefinition(loadedProtoFile, options);

const jsonProto = protobufjs.loadSync(protofileAddress).toJSON().nested;

const serviceName = Object.keys(jsonProto)[0];

const serviceMethods = jsonProto[serviceName].methods;

server.addService(
  service[serviceName].service,
  (() => {
    const services = [];
    for (const method in serviceMethods) {
      const responseTypeName = serviceMethods[method].responseType;
      services[method] = (_, res) => {
        res(null, mockedData[responseTypeName] || {});
      };
    }
    return services;
  })()
);

server.bindAsync(
  MOCK_SERVER_ADDRESS,
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log(`Server running at ${MOCK_SERVER_ADDRESS}`);
    server.start();
  }
);
