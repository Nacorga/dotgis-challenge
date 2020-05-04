import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
  
function BarChartFunc(props: any) {

  const [temps, setTemps] = useState(props.data);

  useEffect(() => {
    setTemps(props.data)
  }, [props.data]);

  const randomize = () => {
    setTemps({
      feelsLike: mathCalc(temps.feelsLike),
      max: mathCalc(temps.max),
      min: mathCalc(temps.min)
    });
  }

  const mathCalc = (val: number) => {
    return (val * ( Math.random() * 2 )).toFixed(2);
  }

  return (

    <div className="BarChart">
      <BarChart width={320} height={250} data={[temps]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="feelsLike" name="Feels" fill="#82ca9d" />
        <Bar dataKey="max" name="Max" fill="#F46F52" />
        <Bar dataKey="min" name="Min" fill="#3b5268" />
      </BarChart>
      <button className="btn btn-primary mt-3" onClick={() => randomize()}>Randomize</button>
    </div>

  );

}

export default BarChartFunc;