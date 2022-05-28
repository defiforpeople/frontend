export interface IStrategy {
  getQuotaQty(tokenAddr: string, amount: number): Number;
  getQuotaPrice(): number;

  // function getUserQuotas(address userAddr) external view returns (uint256);
}
