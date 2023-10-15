import { HttpError } from "../../helpers/index.js";

const isValidTime = (req, res, next) => {
	const { start, end } = req.body;

	const startTime = parseTime(start);
	const endTime = parseTime(end);
	if (startTime > endTime) {
		return next(HttpError(404, "End time must be greater than start time"));
	}
	next();
};

function parseTime(timeString) {
	const [hours, minutes] = timeString.split(":").map(Number);
	return hours * 60 + minutes;
}
export default isValidTime;
