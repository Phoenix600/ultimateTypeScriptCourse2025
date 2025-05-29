class MyCalculator<T extends Number>
{
	private _sData1:T;
	private _sData2:T;

	public constructor(sData1:T,sData2:T)
	{
		this._sData1 = sData1;
		this._sData2 = sData2;
	}

	// Getters And Setters
	get sData1(): T {
		return this._sData1;
	}

	set sData1(value: T) {
		this._sData1 = value;
	}

	get sData2(): T {
		return this._sData2;
	}

	set sData2(value: T) {
		this._sData2 = value;
	}

	// Addition
	public addData(): void {
		console.log(this._sData1.valueOf() + this._sData2.valueOf());
	}

	public subData(): void {
		console.log(this._sData1.valueOf() - this._sData2.valueOf());
	}

}

// Driver Code
let instance4:MyCalculator<Number> = new MyCalculator<Number>(12,14);
instance4.addData();
instance4.subData();
