
async function getRandomQuote()
{
	try
	{
		const response:Response = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random");
		if(!response.ok)
		{
			throw new Error(`HTTP error! Status: ${response.status}`);

		}
		const data = await response.json();;
		console.log(data);
	}
	catch(e)
	{
		console.log("Fetch Error : " + e);
	}
}

getRandomQuote();