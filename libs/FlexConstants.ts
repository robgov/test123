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
      public static Large_2 = new FlexLayoutUnit(Column.Large.value * 2 + Margin.Large.value, "px");
      public static Large_3 = new FlexLayoutUnit(Column.Large.value * 3 + Margin.Large.value * 2, "px");
      public static Large_5 = new FlexLayoutUnit(Column.Large.value * 5 + Margin.Large.value * 4, "px");
      public static Large_6 = new FlexLayoutUnit(Column.Large.value * 6 + Margin.Large.value * 5, "px");
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