declare module '@woowacourse/mission-utils' {
  declare class Console {
    static readLine(query: string, callback: (input: string) => void): void;

    static readLineAsync(query: string): Promise<string>;

    static print(message: string): void;
  }

  declare class Random {
    static pickNumberInRange(startInclusive: number, endInclusive: number): number;

    static pickNumberInList(array: number[]): number;

    static pickUniqueNumbersInRange(
      startInclusive: number,
      endInclusive: number,
      count: number,
    ): number[];

    static shuffle(array: number[]): number[];
  }
}
