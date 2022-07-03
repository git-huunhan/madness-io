import merge from "lodash/merge";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
// @mui
import { Card, CardHeader, Box, TextField } from "@mui/material";
// components
import { BaseOptionChart } from "../../../../components/chart";

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    year: "Tuần",
    data: [
      {
        name: "Khoản Thu",
        data: [10, 41, 35, 151, 49, 62, 69],
      },
      {
        name: "Khoản Chi",
        data: [10, 34, 13, 56, 77, 88, 99],
      },
    ],
  },
  {
    year: "Tháng",
    data: [
      {
        name: "Khoản Thu",
        data: [148, 91, 69, 62],
      },
      {
        name: "Khoản Chi",
        data: [45, 77, 99, 88],
      },
    ],
  },
  {
    year: "Năm",
    data: [
      {
        name: "Khoản Thu",
        data: [76, 42, 29, 41, 27, 138, 117, 86, 63, 69, 91, 48],
      },
      {
        name: "Khoản Chi",
        data: [80, 55, 34, 114, 80, 130, 15, 28, 55, 69, 91, 48],
      },
    ],
  },
];

export default function BankingBalanceStatistics() {
  const [seriesData, setSeriesData] = useState("Năm");

  const handleChangeSeriesData = (event) => {
    setSeriesData(event.target.value);
  };

  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ],
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} VND`,
      },
    },
  });

  return (
    <Card>
      <CardHeader
        title="Thống Kê Số Dư"
        subheader="(+43% Khoản Thu | +12% Khoản Chi) so với năm trước"
        action={
          <TextField
            select
            fullWidth
            value={seriesData}
            SelectProps={{ native: true }}
            onChange={handleChangeSeriesData}
            sx={{
              "& fieldset": { border: "0 !important" },
              "& select": {
                pl: 1,
                py: 0.5,
                pr: "24px !important",
                typography: "subtitle2",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: 0.75,
                bgcolor: "background.neutral",
              },
              "& .MuiNativeSelect-icon": {
                top: 4,
                right: 0,
                width: 20,
                height: 20,
              },
            }}
          >
            {CHART_DATA.map((option) => (
              <option key={option.year} value={option.year}>
                {option.year}
              </option>
            ))}
          </TextField>
        }
      />

      {CHART_DATA.map((item) => (
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.year === seriesData && (
            <ReactApexChart
              type="bar"
              series={item.data}
              options={chartOptions}
              height={364}
            />
          )}
        </Box>
      ))}
    </Card>
  );
}
