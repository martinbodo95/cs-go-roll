import { Wallet } from './Wallet';

export interface OnUpdateWalletPayload {
  updateWallet: {
    wallet: Wallet;
  };
}
