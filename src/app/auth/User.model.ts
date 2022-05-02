export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  public get token() {
    // Validation
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
      return null;

    // Send User their token
    return this._token;
  }
}
