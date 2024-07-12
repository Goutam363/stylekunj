import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Policy({ pol }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography>{pol.header}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{pol.body}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
