import format from './format';

function usStats(data){
  const [usStatRaw] = data

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit',   };

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

export default {
  usStats
}