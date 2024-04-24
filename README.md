# HyperDX-Local in a Devcontainer

This is a very simple and lightweight demonstration of using HyperDX Local in a `devcontainer` to debug your open telemetry setup while in development.

## Prerequesites

1. Assumes you are using VSCode
1. Docker installed on your local machine
1. The Dev Containter extension installed (ms-vscode-remote.remote-containers)

## Getting started

1. Clone this repository and open in VSCode
1. Choose to open the project as in a `devcontainer` when prompted
1. `yarn install` to install the required packages
1. `yarn serve` to start the demo Express server
1. Visit [http://localhost:8080] to see the HyperDX dashboard
1. Visit [http://localhost:3000] to make an HTTP request of Express

## Details about this setup

- This setup use Docker Compose to launch both the development environment and the 'hyperdx/hyperdx-local' container.
- Inside the development container the HyperDX consumer is located at the network address 'hyperdx'
  which you can see in the `yarn serve` command in [package.json](./blob/main/package.json) referencing the endpoint -
  `OTEL_EXPORTER_OTLP_ENDPOINT='http://hyperdx:4318'`
  