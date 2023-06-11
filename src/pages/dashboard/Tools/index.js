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

const TYPE = [
  { label: "feature", value: 0 },
  { label: "bugfix", value: 1 },
];

export default function Wallet() {
  const { themeStretch } = useSettings();

  const [data, setData] = useState({
    usNumber: "",
    taskNumberBF: "",
    taskNumberTR: "",
    taskNameBF: "",
    taskNameTR: "",
    gitAction: 0,
    type: 0,
  });
  const [taskReportList, setTaskReportList] = useState("");
  const [label, setLabel] = useState("");
  const [strGitAction, setStrGitAction] = useState("");

  useEffect(() => {
    const string = GIT_ACTIONS.find((item) => item.value === data.gitAction);
    if (string?.value === 0) {
      setStrGitAction("");
    } else {
      setStrGitAction(string?.label);
    }
  }, [data]);

  useEffect(() => {
    const combineString = data.taskNumberBF + " " + data.taskNameBF;
    const stringnew = combineString.trim().replace(/  +/g, " ").toLowerCase();
    setLabel(stringnew.replaceAll(" ", "-"));
  }, [data]);

  const handleOnChange = (e) => {
    const value = e.target.value;
    const id = e.target.name;

    setData({
      ...data,
      [id]: value,
    });
  };

  const handleAddTaskReportList = () => {
    const obj = {
      usNumber: data.usNumber,
      taskNumberTR: data.taskNumberTR,
      taskNameTR: data.taskNameTR,
      type: data.type,
    };

    setTaskReportList((prevArray) => [...prevArray, obj]);
    setData({
      ...data,
      usNumber: "",
      taskNumberTR: "",
      taskNameTR: "",
      type: 0,
    });
  };

  const handleCopyTaskReportList = () => {
    const reportList = taskReportList
      .map((item) => {
        let string;
        if (item.type === 0) {
          string = `User Story ${item.usNumber} - Task ${item.taskNumberTR}: ${item.taskNameTR}`;
        } else {
          string = `Bugfix ${item.taskNumberTR}: ${item.taskNameTR}`;
        }

        return string;
      })
      .join("\n");

    return reportList;
  };

  const handleClear = () => {
    setTaskReportList([]);
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
        <Card sx={{ p: 3, mb: 4 }}>
          <Stack spacing={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <h2>Branch Formatting</h2>
              </Grid>

              <Grid item xs={12} md={2}>
                <TextField
                  label="Task Number"
                  name="taskNumberBF"
                  fullWidth
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Git Actions
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="gitAction"
                    value={data.gitAction}
                    label="Git Actions"
                    fullWidth
                    onChange={handleOnChange}
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
                <TextField
                  label="Task Name"
                  name="taskNameBF"
                  fullWidth
                  onChange={handleOnChange}
                />
              </Grid>

              <Grid item xs={24} md={8}>
                <Button
                  variant="outlined"
                  onClick={() => navigator.clipboard.writeText(featureText)}
                  sx={{ mr: 2 }}
                >
                  Copy
                </Button>
                <label>{featureText}</label>
              </Grid>

              <Grid item xs={24} md={8}>
                <Button
                  variant="outlined"
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

        <Card sx={{ p: 3, mb: 4 }}>
          <Stack spacing={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <h2>Task Reporting</h2>
              </Grid>

              <Grid item xs={12} md={2}>
                <TextField
                  label="User Story Number"
                  name="usNumber"
                  value={data.usNumber}
                  fullWidth
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  label="Task Number"
                  name="taskNumberTR"
                  value={data.taskNumberTR}
                  fullWidth
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="type"
                    value={data.type}
                    label="Type"
                    fullWidth
                    onChange={handleOnChange}
                  >
                    {TYPE.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item.value}>
                          {item.label}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Task Name"
                  name="taskNameTR"
                  value={data.taskNameTR}
                  fullWidth
                  onChange={handleOnChange}
                />
              </Grid>

              <Grid item xs={12} md={9}></Grid>

              <Grid item xs={12} md={3} style={{ display: "flex" }}>
                <Button
                  variant="outlined"
                  onClick={() =>
                    navigator.clipboard.writeText(handleCopyTaskReportList())
                  }
                  disabled={taskReportList.length <= 0}
                  fullWidth
                  sx={{ mr: 2 }}
                >
                  Copy
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleClear}
                  disabled={taskReportList.length <= 0}
                  fullWidth
                  sx={{ mr: 2 }}
                >
                  Clear
                </Button>
                <Button
                  onClick={handleAddTaskReportList}
                  fullWidth
                  variant="outlined"
                >
                  Add
                </Button>
              </Grid>

              {taskReportList.length > 0 &&
                taskReportList.map((item) => {
                  if (item.type === 0) {
                    return (
                      <Grid item xs={24} md={12}>
                        <label>{`User Story ${item.usNumber} - Task ${item.taskNumberTR}: ${item.taskNameTR}`}</label>
                      </Grid>
                    );
                  } else {
                    return (
                      <Grid item xs={24} md={12}>
                        <label>{`Bugfix ${item.taskNumberTR}: ${item.taskNameTR}`}</label>
                      </Grid>
                    );
                  }
                })}
            </Grid>
          </Stack>
        </Card>
      </Container>
    </Page>
  );
}
