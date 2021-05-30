import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Result = () => {
    const data = [
        {
          uv: 10000,
          pv: 2400,
          amt: 2400,
        },
        {
            uv: 4000,
            pv: 2400,
            amt: 2400,
          },
          {
            uv: 4000,
            pv: 2400,
            amt: 2400,
          },
      ];
    return (
        <div className="App">
            <div style={{border:"2px solid #94a0a8", width:"100%", color:"#07c2fe"}}>
                <h2>LOGO</h2>
            </div>
            <h1 className="grey">Here's what we have found...</h1>
            { <ResponsiveContainer width="60%" height="50%">
                <BarChart
                width={200}
                height={200}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid  />
                <YAxis />
                <Bar dataKey="pv" fill="#07c2fe" />
                <Bar dataKey="uv" fill="#94a0a8" />
                </BarChart>
            </ResponsiveContainer>}
            <div style={{border:"2px solid #94a0a8", width:"100%", color:"#07c2fe", textAlign:"center"}}>
                <h2>Footer</h2>
            </div>
        </div>
    )
}

export default Result
