import fs from 'fs/promises';
import { parse } from 'yaml';
interface TimelineYaml {
  When: string;
  Event: string;
  Notes: string[] | null;
}

const file = (await fs.readFile('src/data/timeline.yaml')).toString();

export default parse(file) as TimelineYaml[];