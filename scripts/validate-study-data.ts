import * as fs from 'fs';
import * as path from 'path';
import { articlesConfig } from '../data/articles-config';
import { biblicalTextsMap, studiesMap } from '../data/articles';
import { ArticleValidationIssue, validateStudyRegistry } from '../lib/articleValidation';

const args = new Set(process.argv.slice(2));
const strict = args.has('--strict');
const onlyActive = args.has('--active');

const rootDir = path.join(__dirname, '..');
const articlesDir = path.join(rootDir, 'data/articles');
const fileStudyIds = fs.existsSync(articlesDir)
  ? fs.readdirSync(articlesDir)
    .map((file) => file.match(/^study-(\d{4}-\d{2}-\d{2})\.ts$/)?.[1])
    .filter((studyId): studyId is string => Boolean(studyId))
    .sort()
  : [];

const issues = validateStudyRegistry(studiesMap, biblicalTextsMap, {
  activeStudyIds: articlesConfig.activeStudyIds,
  fileStudyIds,
  onlyActive,
  strict,
});

printIssues(issues);

const errors = issues.filter((issue) => issue.severity === 'error').length;
const warnings = issues.filter((issue) => issue.severity === 'warning').length;

if (errors > 0) {
  console.error(`\nstudy:validate falló: ${errors} error(es), ${warnings} warning(s).`);
  process.exit(1);
}

console.log(`\nstudy:validate limpio: 0 errores, ${warnings} warning(s).`);

function printIssues(validationIssues: ArticleValidationIssue[]) {
  if (!validationIssues.length) {
    console.log('study:validate no encontró problemas.');
    return;
  }

  for (const issue of validationIssues) {
    const prefix = issue.severity === 'error' ? 'ERROR' : 'WARN';
    const study = issue.studyId ? `${issue.studyId} ` : '';
    console.log(`${prefix} ${study}${issue.path} [${issue.code}] ${issue.message}`);
  }
}
