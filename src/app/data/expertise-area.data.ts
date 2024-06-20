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
    percent: '80%',
    name: 'Writing/Editing'
  },
  {
    icon: monitor,
    percent: '30%',
    name: 'UX/UI Design'
  },
  {
    icon: speed,
    percent: '75%',
    name: 'Performance Optimization'
  },
  {
    icon: search,
    percent: '20%',
    name: 'Unit Testing'
  },
]

export default expertiseAreaData
