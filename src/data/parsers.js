import format from './format';
import stateNames from './stateNames';

function usStats(data){
  const [usStatRaw] = data

  const options = {  year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',   };

  return {
    cases: format.number(usStatRaw.positive),
    deaths: format.number(usStatRaw.death),
    recovered: format.number(usStatRaw.recovered),
    ventilator: format.number(usStatRaw.onVentilatorCurrently),
    hospitalized: format.number(usStatRaw.hospitalized),
    icu: format.number(usStatRaw.inIcuCurrently),
    tested: format.number(usStatRaw.totalTestResults),
    updated: new Intl.DateTimeFormat(undefined, options).format(new Date(usStatRaw.lastModified)),
  }
}
function stateParser(data){
  // const [usStatRaw] = data

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit',   };

  return {
    cases: format.number(data.positive),
    deaths: format.number(data.death),
    recovered: format.number(data.recovered),
    ventilator: format.number(data.onVentilatorCurrently),
    hospitalized: format.number(data.hospitalized),
    icu: format.number(data.inIcuCurrently),
    tested: format.number(data.totalTestResults),
    updated: new Intl.DateTimeFormat(undefined, options).format(new Date(data.dateModified)),
  }
}

function historicUS(historicData){
  return [
    {
      label: 'Cases',
      key: 'positive',
      color: 'rgb(10, 0, 20)'
    },
    {
      label: 'Recovered',
      key: 'recovered',
      color: 'rgb(100, 100, 200)'
    },
    {
      label: 'Total Tested',
      key: 'totalTestResults',
      color: 'rgb(10, 30, 100)'
    },
    {
      label: 'Hospitalized',
      key: 'hospitalizedCurrently',
      color: 'rgb(20, 100, 230)'
    },
    {
      label: 'Deaths',
      key: 'death',
      color: 'rgb(255, 99, 132)'
    }
  ].reduce((prev, next) => {
    if(historicData.filter(d => d[next.key] !== null).length > 4){
      prev.push(parseChart(historicData, next.key, next.label, next.color))
    }
    return prev
  }, [])
}
function dateFMT(date){
  let dateStr = ''
  const str = String(date)
  dateStr += str.slice(0, 4) + '/'
  dateStr += str.slice(4, 6) + '/'
  dateStr += str.slice(6)
  return dateStr
}
function parseChart(historicData, key, label, color) {
  const chartData = historicData.map((data) => {
    return {
      x: new Date(dateFMT(data.date)),
      y: data[key] || 0,
    };
  });

  return {
    label,
    data: chartData,
    fill: false,
    borderColor: color,
  };
}

function tableParser(data){
  return data.map(s => {
    const stateName = stateNames.find(d => d.abbreviation === s.state)
    return {
      abbreviation: s.state,
      name: stateName.name,
      cases: s.positive,
      deaths: s.death,
      tested: s.totalTestResults
    }
  })
}

export default {
  usStats,
  stateParser, 
  historicUS,
  tableParser
}