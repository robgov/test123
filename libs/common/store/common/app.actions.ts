/* eslint-disable @typescript-eslint/no-namespace */
export namespace AppAction {
  export class Start {
    static readonly type = '[App] Start';
  }
  export class Clear {
    static readonly type = '[App] Clear';
  }

  export class SetSideNav {
    static readonly type = '[App] SetSideNav';
    constructor(public type: string) {}
  }

  export class ClearSideNav {
    static readonly type = '[App] ClearSideNav';
  }
}
