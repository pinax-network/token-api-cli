# Token API CLI `@pinax/token-api`

> Power your apps & AI agents with real-time token data.

[![npm version](https://img.shields.io/npm/v/@pinax/token-api-cli.svg)](https://www.npmjs.com/package/@pinax/token-api-cli)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Overview

The `@pinax/token-api-cli` provides a CLI for [The Graph's Token API](https://thegraph.com/docs/en/token-api/quick-start/). Access blockchain token information including:

- **Token Transfers** - ERC-20 and native token transfers
- **DEX Swaps** - Uniswap and other DEX swap events
- **Token Metadata** - Symbol, name, decimals, supply
- **Balances** - Real-time token holdings
- **Prices** - Current USD prices and OHLCV data
- **Liquidity Pools** - DEX pool information

### Supported Networks

The SDK provides typed chain constants for type-safe network selection:

- **EVM Chains**: Ethereum, ArbitrumOne, Unichain, Base, Optimism, Polygon, BNB Chain & Avalanche.
- **Solana**: Mainnet.
- **Tron**: Mainnet.

## Supported environment variables

| Variable | Description |
|----------|-------------|
| `TOKENAPI_KEY` | API Token (Authentication JWT) |
| `TOKEN_API_BASE_URL` | Custom base URL for the Token API |

## CLI Usage

The SDK includes a command-line interface for quick access to the Token API.

### Installation

After installing the package globally, you can use the CLI directly:

```bash
npm install -g @pinax/token-api-cli
```

or call `npmx` without global install:

```bash
npx @pinax/token-api-cli evm tokens transfers --network mainnet --limit 10
```

### Commands

```bash
# EVM token transfers
token-api evm tokens transfers --network mainnet --from 0xd8da6bf26964af9d7eed9e03e53415d37aa96045 --limit 10

# EVM token balances
token-api evm tokens balances --network mainnet --address 0xd8da6bf26964af9d7eed9e03e53415d37aa96045

# EVM DEX swaps
token-api evm dexs swaps --network mainnet --limit 10

# SVM (Solana) token transfers
token-api svm tokens transfers --network solana --limit 10

# TVM (Tron) token transfers
token-api tvm tokens transfers --network tron --limit 10

# Monitoring commands
token-api monitoring health
token-api monitoring version
token-api monitoring networks
```

### Development Usage

When running from the repository using `npm run cli`, use `--` to separate npm arguments from CLI options:

```bash
# Correct usage with npm run
npm run cli -- evm tokens transfers --network mainnet --limit 10
npm run cli -- svm tokens transfers --network solana --limit 10
npm run cli -- monitoring health
```

### Help

View all available commands and options:

```bash
token-api --help
token-api evm --help
token-api evm tokens --help
token-api evm tokens transfers --help
```

## Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/pinax-network/token-api-cli.git
cd token-api-cli

# Install dependencies
bun install

# Build the package
bun run build
```

## Related Resources

- [Token API Documentation](https://thegraph.com/docs/en/token-api/quick-start/)
- [The Graph Market](https://thegraph.market) - Get your API key
- [Token API Repository](https://github.com/pinax-network/token-api)

## License

Apache 2.0 - see [LICENSE](LICENSE) for details.
