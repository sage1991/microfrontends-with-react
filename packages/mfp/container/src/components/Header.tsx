import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { makeStyles } from "@mui/styles"
import { Link } from "react-router"

interface Props {
  signedIn?: boolean
  onSignOut?: () => void
}

export const Header = ({ signedIn, onSignOut }: Props) => {
  const classes = useStyles()

  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut()
    }
  }

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap component={Link} to="/">
          App
        </Typography>
        <Button
          color="primary"
          variant="outlined"
          className={classes.link}
          component={Link}
          to={signedIn ? "/" : "/auth/signin"}
          onClick={onClick}
        >
          {signedIn ? "Logout" : "Login"}
        </Button>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    },
    a: {
      textDecoration: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}))
