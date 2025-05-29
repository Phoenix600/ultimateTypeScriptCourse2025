class MyPrinter<T>
{
	private _sData:T | undefined;

	get sData(): T | undefined {
		return this._sData;
	}

	set sData(value: T | undefined) {
		this._sData = value;
	}

	public print():void
	{
		console.log("Printing..." + this._sData);
	}
}

// Driver Code
let instance1:MyPrinter<String> = new MyPrinter<String>();
instance1.sData = "Pranay Ramteke";
instance1.print();

let instance2:MyPrinter<Number> = new MyPrinter<Number>();
instance2.sData = 17;
instance2.print();