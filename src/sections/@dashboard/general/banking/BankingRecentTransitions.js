import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { sentenceCase } from "change-case";
// @mui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  Stack,
  Table,
  Avatar,
  Button,
  Divider,
  MenuItem,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  Typography,
  IconButton,
  TableContainer,
} from "@mui/material";
import moment from "moment";
// utils
import { fCurrency } from "../../../../utils/formatNumber";
// _mock
import { _bankingRecentTransitions } from "../../../../_mock";
// components
import Label from "../../../../components/Label";
import Iconify from "../../../../components/Iconify";
import Scrollbar from "../../../../components/Scrollbar";
import MenuPopover from "../../../../components/MenuPopover";

import { queryAll } from "../../../../functions/user";
// ----------------------------------------------------------------------

export default function BankingRecentTransitions() {
  const theme = useTheme();
  const [users, setUsers] = useState([]);

  const isLight = theme.palette.mode === "light";

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => queryAll().then((user) => setUsers(user.data));

  return (
    <>
      <Card>
        <CardHeader title="Users" sx={{ mb: 3 }} />
        <Scrollbar>
          <TableContainer sx={{ minWidth: 720, overflow: "unset" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ minWidth: 50 }}>ID</TableCell>
                  <TableCell sx={{ minWidth: 160 }}>Last Name</TableCell>
                  <TableCell sx={{ minWidth: 160 }}>First Name</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Gender</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Email</TableCell>
                  <TableCell sx={{ minWidth: 200 }}>Phone</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Date of Birth</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Address</TableCell>
                  <TableCell sx={{ minWidth: 200 }}>Phone</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Date of Birth</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Address</TableCell>
                  <TableCell sx={{ minWidth: 200 }}>Phone</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Date of Birth</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody className="test">
                {users.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2">
                          {row.studentCode}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2">
                          {row.lastName}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2">
                          {row.firstName}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2">
                          {row.gender}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2">{row.email}</Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2">{row.phone}</Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2">
                          {moment(row.dateOfBirth).format("DD/MM/YYYY")}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2">
                          {row.address}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      {format(new Date(row.dateOfBirth), "dd MMM yyyy")}
                    </TableCell>
                    <TableCell>
                      {format(new Date(row.dateOfBirth), "dd MMM yyyy")}
                    </TableCell>

                    <TableCell>
                      <Label
                        variant={isLight ? "ghost" : "filled"}
                        color={
                          (row.name === "paid" && "success") ||
                          (row.name === "pending" && "warning") ||
                          "error"
                        }
                      >
                        {row.address}
                      </Label>
                    </TableCell>

                    <TableCell>{row.phone}</TableCell>
                    <TableCell sx={{ textTransform: "capitalize" }}>
                      {row.name}
                    </TableCell>

                    <TableCell align="right">
                      <MoreMenuButton />
                    </TableCell>

                    <TableCell align="right">
                      <MoreMenuButton />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Divider />

        <Box sx={{ p: 2, textAlign: "right" }}>
          <Button
            size="small"
            color="inherit"
            endIcon={<Iconify icon={"eva:arrow-ios-forward-fill"} />}
          >
            View All
          </Button>
        </Box>
      </Card>
    </>
  );
}

// ----------------------------------------------------------------------

AvatarIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

function AvatarIcon({ icon }) {
  return (
    <Avatar
      sx={{
        width: 48,
        height: 48,
        color: "text.secondary",
        bgcolor: "background.neutral",
      }}
    >
      <Iconify icon={icon} width={24} height={24} />
    </Avatar>
  );
}

// ----------------------------------------------------------------------

function renderAvatar(category, avatar) {
  if (category === "Books") {
    return <AvatarIcon icon={"eva:book-fill"} />;
  }
  if (category === "Beauty & Health") {
    return <AvatarIcon icon={"eva:heart-fill"} />;
  }
  return avatar ? (
    <Avatar
      alt={category}
      src={avatar}
      sx={{
        width: 48,
        height: 48,
        boxShadow: (theme) => theme.customShadows.z8,
      }}
    />
  ) : null;
}

// ----------------------------------------------------------------------

function MoreMenuButton() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };

  return (
    <>
      <IconButton size="large" onClick={handleOpen}>
        <Iconify icon={"eva:more-vertical-fill"} width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        arrow="right-top"
        sx={{
          mt: -0.5,
          width: 160,
          "& .MuiMenuItem-root": {
            px: 1,
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <MenuItem>
          <Iconify icon={"eva:download-fill"} sx={{ ...ICON }} />
          Download
        </MenuItem>

        <MenuItem>
          <Iconify icon={"eva:printer-fill"} sx={{ ...ICON }} />
          Print
        </MenuItem>

        <MenuItem>
          <Iconify icon={"eva:share-fill"} sx={{ ...ICON }} />
          Share
        </MenuItem>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem sx={{ color: "error.main" }}>
          <Iconify icon={"eva:trash-2-outline"} sx={{ ...ICON }} />
          Delete
        </MenuItem>
      </MenuPopover>
    </>
  );
}
