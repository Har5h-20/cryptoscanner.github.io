function fetchCryptoPrices() {
    $.ajax({
        url: 'https://api.coingecko.com/api/v3/simple/price',
        method: 'GET',
        data: {
            ids: 'bitcoin,ethereum,polkadot,cardano,ripple,litecoin,binancecoin,solana',
            vs_currencies: 'usd'
        },
        success: function(data) {
            $('#btc-price').text('BTC: $' + (data.bitcoin && data.bitcoin.usd ? data.bitcoin.usd.toFixed(2) : 'N/A'));
            $('#eth-price').text('ETH: $' + (data.ethereum && data.ethereum.usd ? data.ethereum.usd.toFixed(2) : 'N/A'));
            $('#dot-price').text('DOT: $' + (data.polkadot && data.polkadot.usd ? data.polkadot.usd.toFixed(2) : 'N/A'));
            $('#ada-price').text('ADA: $' + (data.cardano && data.cardano.usd ? data.cardano.usd.toFixed(2) : 'N/A'));
            $('#xrp-price').text('XRP: $' + (data.ripple && data.ripple.usd ? data.ripple.usd.toFixed(2) : 'N/A'));
            $('#ltc-price').text('LTC: $' + (data.litecoin && data.litecoin.usd ? data.litecoin.usd.toFixed(2) : 'N/A'));
            $('#bnb-price').text('BNB: $' + (data.binancecoin && data.binancecoin.usd ? data.binancecoin.usd.toFixed(2) : 'N/A'));
            $('#sol-price').text('SOL: $' + (data.solana && data.solana.usd ? data.solana.usd.toFixed(2) : 'N/A'));
        },
        error: function(xhr, status, error) {
            console.error('Error fetching crypto prices:', status, error);
        }
    });
}

$(document).ready(function() {
    fetchCryptoPrices();
    setInterval(fetchCryptoPrices, 60000); // Update prices every minute
});
