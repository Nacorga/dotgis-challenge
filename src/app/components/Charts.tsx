import React from 'react';
import Loader from 'react-loader-spinner'
import './Charts.scss';
import BarChartFunc from './bar-chart/Bar-chart';

function Charts(props: any) {

    return (
        <div className="Charts">
            {
                props.data ?

                    <ul className="charts-list">
                        {
                            props.data.list.map((elem: any, i: number) => {

                                const sendData = {
                                    feelsLike: elem.main.feels_like,
                                    max: elem.main.temp_max,
                                    min: elem.main.temp_min
                                };

                                return (
                                    <li className="chart" key={`chart-${i}`}>
                                        <BarChartFunc data={sendData} />
                                    </li>
                                )
                            })
                        }
                    </ul>

                    :

                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />

            }
        </div>
    );

}

export default Charts;