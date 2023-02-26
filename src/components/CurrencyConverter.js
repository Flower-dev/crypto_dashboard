import {useState} from 'react'
import axios from 'axios'

import Card from './Card'
const CurrencyConverter = () => {
    const [data, setData] = useState()

    const convert = () => {
        const options = {
            method: 'GET',
            url: 'https://api.coingecko.com/api/v3/exchange_rates',
        }

        axios.request(options).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }

    console.log(data)
    const cryptoNames = data !== undefined ? Object.keys(data?.rates) : []
    console.log('%cName crypto', 'color: lightblue', cryptoNames)


    return (
        <section className="currency-converter">
            <h3>Converter</h3>
            <section>
          
                {cryptoNames !== undefined ? cryptoNames?.map((cryptoName, index) => 
                    <Card name={cryptoName} id={index}/>
                ) : 'pas de Data'}
               

                <button className='convert-button' onClick={convert}>Convert</button>
            </section>
            
        </section>
    )
}

export default CurrencyConverter;