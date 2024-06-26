import { Box } from "@mui/material";
import React from "react";
import styles from "../css/dashboard.module.css";
import BarChartContainer from "../components/Charts/BarChart/BarChartContainer";
import GaugeChartContainer from "../components/Charts/GaugeChart/GaugeChartContainer";
import MerchantWiseRevenue from "../components/Charts/MerchantWiseRevenue/MerchantWiseRevenue";
import PieChartContainer from "../components/Charts/PieChart/PieChartContainer";

function Dashboard() {
  const revenueBarChartData = {
    title: "Revenue",
    displayValue: "20k",
    subTitle: "All Villages",
    descriptionText: "Last 10 Days",
    style: {
      color: "#ff6633",
      backgroundColor: "#fff7f5",
    },
    dataset: [
      {
        revenue: 20000,
        day: "01/04/24",
      },
      {
        revenue: 20000,
        day: "02/04/24",
      },
      {
        revenue: 30000,
        day: "03/04/24",
      },
      {
        revenue: 40000,
        day: "04/04/24",
      },
      {
        revenue: 50000,
        day: "05/04/24",
      },
      {
        revenue: 50000,
        day: "06/04/24",
      },
      {
        revenue: 40000,
        day: "07/04/24",
      },
      {
        revenue: 30000,
        day: "08/04/24",
      },
      {
        revenue: 50000,
        day: "09/04/24",
      },
      {
        revenue: 60000,
        day: "10/04/24",
      },
    ],
  };

  const visitedStudentsBarChartData = {
    title: "Visited Students",
    displayValue: "10k",
    subTitle: "All Villages",
    descriptionText: "Last 10 Days",
    style: {
      color: "#3361ff",
      backgroundColor: "#f0f3ff",
    },
    dataset: [
      {
        revenue: 20000,
        day: "01/04/24",
      },
      {
        revenue: 20000,
        day: "02/04/24",
      },
      {
        revenue: 30000,
        day: "03/04/24",
      },
      {
        revenue: 40000,
        day: "04/04/24",
      },
      {
        revenue: 50000,
        day: "05/04/24",
      },
      {
        revenue: 50000,
        day: "06/04/24",
      },
      {
        revenue: 40000,
        day: "07/04/24",
      },
      {
        revenue: 30000,
        day: "08/04/24",
      },
      {
        revenue: 50000,
        day: "09/04/24",
      },
      {
        revenue: 60000,
        day: "10/04/24",
      },
    ],
  };

  const interestedStudentsBarChartData = {
    title: "Interested Students",
    displayValue: "5k",
    subTitle: "All Villages",
    descriptionText: "Last 10 Days",
    style: {
      color: "#128822",
      backgroundColor: "#f4fcf5",
    },
    dataset: [
      {
        revenue: 20000,
        day: "01/04/24",
      },
      {
        revenue: 20000,
        day: "02/04/24",
      },
      {
        revenue: 30000,
        day: "03/04/24",
      },
      {
        revenue: 40000,
        day: "04/04/24",
      },
      {
        revenue: 50000,
        day: "05/04/24",
      },
      {
        revenue: 50000,
        day: "06/04/24",
      },
      {
        revenue: 40000,
        day: "07/04/24",
      },
      {
        revenue: 30000,
        day: "08/04/24",
      },
      {
        revenue: 50000,
        day: "09/04/24",
      },
      {
        revenue: 60000,
        day: "10/04/24",
      },
    ],
  };
  const feepaidPercentageGaugeChartData = {
    title: "Fee Paid %",
    subTitle: "Total 5k",
    dataset: {
      remainingText: "Not Paid",
      remaining: "2k",
      valueText: "Paid",
      value: "3k",
      percentage: 65,
    },
    style: {
      colorGreen800: "#128822",
      colorGreen50: "#f4fcf5",
      colorGray800: "#9d9e9d",
    },
  };
  const merchantWiseRevenueData = {
    title: "Merchant Wise Revenue",
    data: [
      {
        name: "Paytm",
        value: 10000,
        displayValue: "10k",
        style: {
          backgroundColor: "#f0f3ff",
          color: "#00baf2",
        },
      },
      {
        name: "PhonePe",
        value: 15000,
        displayValue: "15k",
        style: {
          backgroundColor: "#ddc7fc",
          color: "#8833ff",
        },
      },
      {
        name: "Google Pay",
        value: 5000,
        displayValue: "5k",
        style: {
          backgroundColor: "#fff",
          color: "#3361ff",
        },
      },
    ],
  };

  const cashNoncashPieChartData = {
    title: "Revenue",
    total: "10k",
    style: {
      colorGreen800: "#128822",
      colorGreen50: "#f4fcf5",
    },
    data: [
      {
        label: "Cash",
        value: 7000,
        displayValue: "7k",
        color: "#ff6633",
      },
      {
        label: "Non Cash",
        value: 3000,
        displayValue: "3k",
        color: "#3361ff",
      },
    ],
  };
  return (
    <Box className={styles.container}>
      <BarChartContainer barChartData={revenueBarChartData} />
      <BarChartContainer barChartData={visitedStudentsBarChartData} />
      <BarChartContainer barChartData={interestedStudentsBarChartData} />
      <GaugeChartContainer guageChartData={feepaidPercentageGaugeChartData} />
      <MerchantWiseRevenue revenueData={merchantWiseRevenueData} />
      <PieChartContainer pieChartData={cashNoncashPieChartData} />
    </Box>
  );
}

export default Dashboard;
