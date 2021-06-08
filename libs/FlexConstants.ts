export namespace FlexConstants {
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

    export class Gutter {
      public static Large = new FlexLayoutUnit(32, "px");
      public static Medium = new FlexLayoutUnit(16, "px");
      public static Small = new FlexLayoutUnit(16, "px");
    }
  
    export class Column {
      public static Large = new FlexLayoutUnit(74, "px");
      public static Large_2 = new FlexLayoutUnit(Column.Large.value * 2 + Gutter.Large.value, "px");
      public static Large_3 = new FlexLayoutUnit(Column.Large.value * 3 + Gutter.Large.value * 2, "px");
      public static Large_4 = new FlexLayoutUnit(Column.Large.value * 4 + Gutter.Large.value * 3, "px");
      public static Large_5 = new FlexLayoutUnit(Column.Large.value * 5 + Gutter.Large.value * 4, "px");
      public static Large_6 = new FlexLayoutUnit(Column.Large.value * 6 + Gutter.Large.value * 5, "px");
      public static Large_7 = new FlexLayoutUnit(Column.Large.value * 7 + Gutter.Large.value * 6, "px");
      public static Large_8 = new FlexLayoutUnit(Column.Large.value * 8 + Gutter.Large.value * 7, "px");
      public static Large_9 = new FlexLayoutUnit(Column.Large.value * 9 + Gutter.Large.value * 8, "px");
      public static Large_11 = new FlexLayoutUnit(Column.Large.value * 11 + Gutter.Large.value * 10, "px");
      public static Large_12 = new FlexLayoutUnit(Column.Large.value * 12 + Gutter.Large.value * 11, "px");
      public static Medium = new FlexLayoutUnit( 74 , "px");
      public static Small = new FlexLayoutUnit(60, "px");
    }
  

  
    export class Button {
      public static Large = new FlexLayoutUnit(74, "px");
      public static Medium = new FlexLayoutUnit(74, "px");
      public static Small = new FlexLayoutUnit(50, "%");
    }


    /// screen size Small, Medium
  }