import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm, Controller } from "react-hook-form";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  ListItemIcon,
  TextField,
} from "@mui/material";
import isEmail from "validator/lib/isEmail";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      username: "Matti",
      lastname: "Masala",
      email: "test@test.com",
      phone: 1234567890,
      mac_address: "11:22:33:44:55:66",
      active: true,
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>Create User</Typography>
                    <IconButton>
                      <CloseIcon onClick={handleClose} />
                    </IconButton>
                  </Box>
                  <Divider sx={{ padding: "4px" }} />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Controller
                    name="username"
                    control={control}
                    render={({ field }) => <TextField fullWidth {...field} />}
                  />
                  <Divider sx={{ padding: "4px" }} />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Controller
                    name="lastname"
                    control={control}
                    render={({ field }) => <TextField fullWidth {...field} />}
                  />
                  <Divider sx={{ padding: "4px" }} />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        /* helperText={() => (error) =>
                          error ? "" : "invalid email"}
                        error={!isEmail(field.value)} */
                        /* helperText={errors.email?.message}
                    error={errors.email?.message}
                    {...register("email", {
                      pattern: {
                        value: /^https:\/\/www\.something\.com\/in\/.*$/,

                        message: "Invalid email",
                      },
                    })} */
                        {...field}
                      />
                    )}
                  />
                  <Divider sx={{ padding: "4px" }} />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        type="number"
                        {...register("phone", { valueAsNumber: true })}
                        {...field}
                      />
                    )}
                  />
                  <Divider sx={{ padding: "4px" }} />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="mac_address"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        helperText={errors.mac_address?.message}
                        error={errors.mac_address?.message}
                        {...register("mac_address", {
                          pattern: {
                            value: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,

                            message: "Invalid mac address",
                          },
                        })}
                        {...field}
                      />
                    )}
                  />
                  <Divider sx={{ padding: "4px" }} />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="active"
                    control={control}
                    render={({ field }) => (
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) => field.onChange(e.target.checked)}
                              checked={field.value}
                            />
                          }
                          label="Active"
                        />
                      </FormGroup>
                    )}
                  />
                  <Divider sx={{ padding: "4px" }} />
                  <Box
                    sx={{
                      mt: 3,
                      display: "flex",
                      alignItems: "space-between",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{ color: "black" }}
                      onClick={handleClose}
                    >
                      close
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#4B0082" }}
                      type="submit"
                    >
                      save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
