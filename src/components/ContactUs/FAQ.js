import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ({faq}) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography>{faq.header}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{faq.body}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}
