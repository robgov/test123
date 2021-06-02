export module FlexConstants {
    export class FlexLayoutUnit {
      value: number;
      units: string;
      public toString = (): string => this.value +  this.units;
  
      constructor(value: number, units: string = '') {
        this.value = value;
        this.units = units;
      }
    }
  
    export class Margin {
      public static Large = new FlexLayoutUnit(16, "px;");
      public static Medium = new FlexLayoutUnit(16, "px;");
      public static Small = new FlexLayoutUnit(16, "px;");
    }
  
    export class Column {
      public static Large = new FlexLayoutUnit(74, "px");
      public static Medium = new FlexLayoutUnit( 74 , "px");
      public static Small = new FlexLayoutUnit(60, "px");
    }
  
    export class Gutter {
      public static Large = new FlexLayoutUnit(32, "px");
      public static Medium = new FlexLayoutUnit(16, "px");
      public static Small = new FlexLayoutUnit(16, "px");
    }
  
    export class Button {
      public static Large = new FlexLayoutUnit(74, "px");
      public static Medium = new FlexLayoutUnit(74, "px");
      public static Small = new FlexLayoutUnit(50, "%");
    }
  }