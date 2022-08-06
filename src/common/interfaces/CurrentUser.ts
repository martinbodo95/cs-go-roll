import { Wallet } from './Wallet';

export interface CurrentUser {
  id: string;
  name: string;
  wallet: Wallet[];
}
