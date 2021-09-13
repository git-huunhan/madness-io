import { Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ icon }) => {
  return (
    <Form inline>
      <FormControl type="text" placeholder="Search..." />
      <FontAwesomeIcon className="mr-2 clickable search-button" icon={icon} />
    </Form>
  );
};

export default Search;
