Easy-to-Use gRPC Mock Server for use with [grpc-web](https://github.com/grpc/grpc-web).

# How to get start:
1. Clone this repo:
```sh
git clone https://github.com/alishi973/grpc-mock-server
```
2. Put your .proto files on `/proto` folder in the main directory.
3. Create `mock-response.json` on the main directory and write your `message rpc` in JSON format.
### Example
```sh
{
    "LoginResponse": {
        "token": "abcdefg"
    }
}
```
4. Install dependecy `yarn install` or `npm install
5. Run server with `npm start` or `yarn start`

Now gRPC mocked server is ready on port `50051` and proxified server for web application are up on `8080` ports on your machine.

Current proxy is cloned of [grpcwebproxy](https://github.com/improbable-eng/grpc-web/tree/master/go/grpcwebproxy).

You can use [bloomRPC](https://github.com/bloomrpc/bloomrpc) for testing mocked server.
