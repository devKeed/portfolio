import {
  useRouteError,
  useNavigate,
  isRouteErrorResponse,
} from "react-router-dom";
import { Button, Typography, Stack } from "@mui/material";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }
  console.error("router error is :", error);

  return (
    <div
      style={{
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"100vh"
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="h5">Oops! wahala</Typography>
        <Typography variant="body1">
          Sorry o, we no get wetin you dey find.
        </Typography>
        <Typography variant="body1">
          {error.statusText || error.message}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate(-1)}
          style={{textTransform:"none"}}
        >
          &larr; Pada!
        </Button>
      </Stack>
    </div>
  );
}
