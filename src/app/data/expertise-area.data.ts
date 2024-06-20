import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { site, api, mobile, monitor, speed, search } from '@icon/regular.icon'


const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: api,
    percent: '90%',
    name: 'Operations'
  },
  {
    icon: api,
    percent: '90%',
    name: 'Analytics'
  },
  {
    icon: mobile,
    percent: '70%',
    name: 'Technical Systems'
  },
  {
    icon: monitor,
    percent: '80%',
    name: 'Writing/Editing'
  },
  {
    icon: speed,
    percent: '55%',
    name: 'Public Speaking'
  },
  {
    icon: search,
    percent: '60%',
    name: 'Research'
  },
]

export default expertiseAreaData
