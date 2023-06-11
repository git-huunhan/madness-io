import { useState, useEffect } from "react";

// @mui
import {
  Grid,
  Container,
  Stack,
  TextField,
  Button,
  Card,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
// hooks
import useSettings from "../../../hooks/useSettings";
// components
import Page from "../../../components/Page";

// ----------------------------------------------------------------------

const GIT_ACTIONS = [
  { label: "none", value: 0 },
  { label: "checkout", value: 1 },
  { label: "checkout -b", value: 2 },
  { label: "fetch origin", value: 3 },
  { label: "push origin", value: 4 },
];

export default function Wallet() {
  const { themeStretch } = useSettings();

  const [taskNumber, setTaskNumber] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [label, setLabel] = useState("");
  const [selectedGitAction, setSelectedGitAction] = useState("");
  const [strGitAction, setStrGitAction] = useState("");

  useEffect(() => {
    const string = GIT_ACTIONS.find((item) => item.value === selectedGitAction);
    if (string?.value === 0) {
      setStrGitAction("");
    } else {
      setStrGitAction(string?.label);
    }
  }, [selectedGitAction]);

  useEffect(() => {
    const combineString = taskNumber + " " + inputValue;
    const stringnew = combineString.trim().replace(/  +/g, " ").toLowerCase();
    setLabel(stringnew.replaceAll(" ", "-"));
  }, [taskNumber, inputValue]);

  const updateTaskNumberValue = (e) => {
    setTaskNumber(e.target.value);
  };

  const updateInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnChangeSelect = (e) => {
    setSelectedGitAction(e.target.value);
  };

  const featureText = `${
    strGitAction ? `git ${strGitAction} ` : ""
  }feature/stephend/${label}`;
  const bugfixText = `${
    strGitAction ? `git ${strGitAction} ` : ""
  }bugfix/stephend/${label}`;

  return (
    <Page title="General: Tools">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Card sx={{ p: 3 }}>
          <Stack spacing={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <h2>Branch Formatting</h2>
              </Grid>

              <Grid item xs={12} md={2}>
                <TextField fullWidth onChange={updateTaskNumberValue} />
              </Grid>
              <Grid item xs={12} md={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Git Actions
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedGitAction}
                    label="Git Actions"
                    fullWidth
                    onChange={handleOnChangeSelect}
                  >
                    {GIT_ACTIONS.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item.value}>
                          {item.label}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField fullWidth onChange={updateInputValue} />
              </Grid>

              <Grid item xs={24} md={8}>
                <Button
                  onClick={() => navigator.clipboard.writeText(featureText)}
                  sx={{ mr: 2 }}
                >
                  Copy
                </Button>
                <label>{featureText}</label>
              </Grid>

              <Grid item xs={24} md={8}>
                <Button
                  onClick={() => navigator.clipboard.writeText(bugfixText)}
                  sx={{ mr: 2 }}
                >
                  Copy
                </Button>
                <label>{bugfixText}</label>
              </Grid>
            </Grid>
          </Stack>
        </Card>
      </Container>
    </Page>
  );
}
