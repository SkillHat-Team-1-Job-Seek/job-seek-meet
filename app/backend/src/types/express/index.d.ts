declare namespace Express {
  export interface Request {
    user?: {
      userID: string;
      [key: string]: any;
    };
  }
}
