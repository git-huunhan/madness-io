// @mui
import { Grid, Container, Stack } from "@mui/material";
// hooks
import useSettings from "../../../hooks/useSettings";
import { useTranslation } from "react-i18next";
// components
import Page from "../../../components/Page";
// sections
import {
  BankingWidgetSummary,
  BankingCurrentBalance,
  BankingBalanceStatistics,
  BankingRecentTransitions,
  BankingExpensesCategories,
} from "../../../sections/@dashboard/general/banking";

// ----------------------------------------------------------------------

export default function Wallet() {
  const { themeStretch } = useSettings();
  const { t } = useTranslation();

  return (
    <Page title="General: Banking">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
              <BankingWidgetSummary
                title={t("trans.income")}
                icon={"eva:diagonal-arrow-left-down-fill"}
                percent={2.6}
                total={90000}
                chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
              />
              <BankingWidgetSummary
                title={t("trans.expenses")}
                color="warning"
                icon={"eva:diagonal-arrow-right-up-fill"}
                percent={-0.5}
                total={8938}
                chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <BankingCurrentBalance />
          </Grid>

          <Grid item xs={12} md={12}>
            <Stack spacing={3}>
              <BankingBalanceStatistics />
              <BankingExpensesCategories />
              <BankingRecentTransitions />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
