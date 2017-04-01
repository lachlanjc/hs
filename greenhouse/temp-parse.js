// After making changes here: `babel-node temp-parse.js`

const _ = require("lodash");
const fs = require("fs");

let data = [
  {
    year: 1880,
    mean: -0.23
  },
  {
    year: 1881,
    mean: -0.15
  },
  {
    year: 1882,
    mean: -0.18
  },
  {
    year: 1883,
    mean: -0.21
  },
  {
    year: 1884,
    mean: -0.29
  },
  {
    year: 1885,
    mean: -0.27
  },
  {
    year: 1886,
    mean: -0.26
  },
  {
    year: 1887,
    mean: -0.33
  },
  {
    year: 1888,
    mean: -0.21
  },
  {
    year: 1889,
    mean: -0.11
  },
  {
    year: 1890,
    mean: -0.34
  },
  {
    year: 1891,
    mean: -0.27
  },
  {
    year: 1892,
    mean: -0.32
  },
  {
    year: 1893,
    mean: -0.36
  },
  {
    year: 1894,
    mean: -0.33
  },
  {
    year: 1895,
    mean: -0.26
  },
  {
    year: 1896,
    mean: -0.19
  },
  {
    year: 1897,
    mean: -0.19
  },
  {
    year: 1898,
    mean: -0.32
  },
  {
    year: 1899,
    mean: -0.21
  },
  {
    year: 1900,
    mean: -0.16
  },
  {
    year: 1901,
    mean: -0.21
  },
  {
    year: 1902,
    mean: -0.31
  },
  {
    year: 1903,
    mean: -0.37
  },
  {
    year: 1904,
    mean: -0.45
  },
  {
    year: 1905,
    mean: -0.31
  },
  {
    year: 1906,
    mean: -0.27
  },
  {
    year: 1907,
    mean: -0.43
  },
  {
    year: 1908,
    mean: -0.44
  },
  {
    year: 1909,
    mean: -0.48
  },
  {
    year: 1910,
    mean: -0.47
  },
  {
    year: 1911,
    mean: -0.45
  },
  {
    year: 1912,
    mean: -0.42
  },
  {
    year: 1913,
    mean: -0.4
  },
  {
    year: 1914,
    mean: -0.24
  },
  {
    year: 1915,
    mean: -0.17
  },
  {
    year: 1916,
    mean: -0.37
  },
  {
    year: 1917,
    mean: -0.45
  },
  {
    year: 1918,
    mean: -0.32
  },
  {
    year: 1919,
    mean: -0.3
  },
  {
    year: 1920,
    mean: -0.28
  },
  {
    year: 1921,
    mean: -0.21
  },
  {
    year: 1922,
    mean: -0.3
  },
  {
    year: 1923,
    mean: -0.27
  },
  {
    year: 1924,
    mean: -0.25
  },
  {
    year: 1925,
    mean: -0.23
  },
  {
    year: 1926,
    mean: -0.11
  },
  {
    year: 1927,
    mean: -0.2
  },
  {
    year: 1928,
    mean: -0.17
  },
  {
    year: 1929,
    mean: -0.32
  },
  {
    year: 1930,
    mean: -0.13
  },
  {
    year: 1931,
    mean: -0.08
  },
  {
    year: 1932,
    mean: -0.11
  },
  {
    year: 1933,
    mean: -0.26
  },
  {
    year: 1934,
    mean: -0.1
  },
  {
    year: 1935,
    mean: -0.16
  },
  {
    year: 1936,
    mean: -0.11
  },
  {
    year: 1937,
    mean: 0.03
  },
  {
    year: 1938,
    mean: 0.05
  },
  {
    year: 1939,
    mean: 0
  },
  {
    year: 1940,
    mean: 0.06
  },
  {
    year: 1941,
    mean: 0.07
  },
  {
    year: 1942,
    mean: 0.05
  },
  {
    year: 1943,
    mean: 0.05
  },
  {
    year: 1944,
    mean: 0.13
  },
  {
    year: 1945,
    mean: 0
  },
  {
    year: 1946,
    mean: -0.08
  },
  {
    year: 1947,
    mean: -0.05
  },
  {
    year: 1948,
    mean: -0.11
  },
  {
    year: 1949,
    mean: -0.12
  },
  {
    year: 1950,
    mean: -0.19
  },
  {
    year: 1951,
    mean: -0.06
  },
  {
    year: 1952,
    mean: 0.01
  },
  {
    year: 1953,
    mean: 0.08
  },
  {
    year: 1954,
    mean: -0.12
  },
  {
    year: 1955,
    mean: -0.13
  },
  {
    year: 1956,
    mean: -0.18
  },
  {
    year: 1957,
    mean: 0.03
  },
  {
    year: 1958,
    mean: 0.05
  },
  {
    year: 1959,
    mean: 0.03
  },
  {
    year: 1960,
    mean: -0.04
  },
  {
    year: 1961,
    mean: 0.06
  },
  {
    year: 1962,
    mean: 0.04
  },
  {
    year: 1963,
    mean: 0.08
  },
  {
    year: 1964,
    mean: -0.2
  },
  {
    year: 1965,
    mean: -0.1
  },
  {
    year: 1966,
    mean: -0.04
  },
  {
    year: 1967,
    mean: -0.01
  },
  {
    year: 1968,
    mean: -0.05
  },
  {
    year: 1969,
    mean: 0.06
  },
  {
    year: 1970,
    mean: 0.04
  },
  {
    year: 1971,
    mean: -0.06
  },
  {
    year: 1972,
    mean: 0.02
  },
  {
    year: 1973,
    mean: 0.16
  },
  {
    year: 1974,
    mean: -0.07
  },
  {
    year: 1975,
    mean: -0.01
  },
  {
    year: 1976,
    mean: -0.12
  },
  {
    year: 1977,
    mean: 0.15
  },
  {
    year: 1978,
    mean: 0.05
  },
  {
    year: 1979,
    mean: 0.12
  },
  {
    year: 1980,
    mean: 0.23
  },
  {
    year: 1981,
    mean: 0.28
  },
  {
    year: 1982,
    mean: 0.09
  },
  {
    year: 1983,
    mean: 0.27
  },
  {
    year: 1984,
    mean: 0.12
  },
  {
    year: 1985,
    mean: 0.08
  },
  {
    year: 1986,
    mean: 0.14
  },
  {
    year: 1987,
    mean: 0.28
  },
  {
    year: 1988,
    mean: 0.35
  },
  {
    year: 1989,
    mean: 0.24
  },
  {
    year: 1990,
    mean: 0.39
  },
  {
    year: 1991,
    mean: 0.38
  },
  {
    year: 1992,
    mean: 0.19
  },
  {
    year: 1993,
    mean: 0.21
  },
  {
    year: 1994,
    mean: 0.28
  },
  {
    year: 1995,
    mean: 0.43
  },
  {
    year: 1996,
    mean: 0.32
  },
  {
    year: 1997,
    mean: 0.45
  },
  {
    year: 1998,
    mean: 0.61
  },
  {
    year: 1999,
    mean: 0.4
  },
  {
    year: 2000,
    mean: 0.4
  },
  {
    year: 2001,
    mean: 0.52
  },
  {
    year: 2002,
    mean: 0.61
  },
  {
    year: 2003,
    mean: 0.6
  },
  {
    year: 2004,
    mean: 0.51
  },
  {
    year: 2005,
    mean: 0.65
  },
  {
    year: 2006,
    mean: 0.59
  },
  {
    year: 2007,
    mean: 0.62
  },
  {
    year: 2008,
    mean: 0.49
  },
  {
    year: 2009,
    mean: 0.59
  },
  {
    year: 2010,
    mean: 0.66
  },
  {
    year: 2011,
    mean: 0.55
  },
  {
    year: 2012,
    mean: 0.57
  },
  {
    year: 2013,
    mean: 0.6
  },
  {
    year: 2014,
    mean: 0.67
  }
];

const fields = _.without(_.keys(data[0]), "year");

_.times(data.length, index => {
  const year = data[index].year;
  let record = { year };
  _.forEach(fields, field => {
    record[field] = data[index][field] * 1.8;
  });
  data[index] = record;
  // console.log(record, newRecord);
});

fs.writeFile("./temp-data.json", JSON.stringify(data), err => {
  if (err) {
    console.log(err);
  } else {
    console.log("✅ Parsed data");
  }
});
