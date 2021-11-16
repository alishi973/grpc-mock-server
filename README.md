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
4. Install dependecy `yarn install` or `npm install`
5. Run server with `npm start` or `yarn start`

Now gRPC mocked server is ready on port `50051` and proxified server for web application are up on `8080` ports on your machine.

Current proxy is cloned of [grpcwebproxy](https://github.com/improbable-eng/grpc-web/tree/master/go/grpcwebproxy).

You can use [bloomRPC](https://github.com/bloomrpc/bloomrpc) for testing mocked server.


### Important note for using on web app 🚧

Remember to change `proxy:start` script on `package.json` and write your served web application address for `allowed_origins` parameter (default address is `http://localhost:3000`)

### Last but not least

For using this repo on non Windows OS, you need to replace `grpcwebproxy.exe` file with your relative reverse proxy and also change name of this file in `package.json` on `proxy:start` script (You can find [here](https://github.com/improbable-eng/grpc-web/releases)).

and maybe need some change for unix file addressing.