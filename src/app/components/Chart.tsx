import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import './Chart.scss';

class ChartsComponent extends Component<{city: string, data: any}> {

    render() {

        return (
            <div className="Chart">
                <p>{this.props.city}</p>
                {
                    this.props.data ? 
                        this.props.data.city.population
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

}

export default ChartsComponent;