import fs from 'fs';
import { execSync } from 'child_process';

const commitMsgFile = process.argv[2];

if (commitMsgFile) {
  let commitMsg = fs.readFileSync(commitMsgFile, 'utf8');

  const prefixToEmoji = {
    'feat': '✨ Feat:',
    'fix': '🎯 Fix:',
    'progress': '🚧 Progress:',
    'bug': '🐛 Bug:',
    'design': '🎨 Design:',
    'style': '💄 Style:',
    'refactor': '♻️ Refactor:',
    'comment': '💡 Comment:',
    'docs': '📋 Docs:',
    'test': '✅ Test:',
    'chore': '🔖 Chore:',
    'rename': '📝 Rename:',
    'remove': '🔥 Remove:',
    'init': '📌 Init:',
    'breaking': '🚑 !BREAKING CHANGE:',
    'merge': '🔔 Merge Request:',
    'perf': '⚡️ Perf:',
    'ci': '💚 CI:'
  };

  for (const [prefix, emoji] of Object.entries(prefixToEmoji)) {
    if (commitMsg.startsWith(`${prefix}:`)) {
      commitMsg = `${emoji}${commitMsg.substring(prefix.length + 1)}`;
      break;
    }
  }

  fs.writeFileSync(commitMsgFile, commitMsg);
}

try {
  execSync(`npx jira-prepare-commit-msg ${commitMsgFile}`);
} catch (error) {
  console.log('Note: jira-prepare-commit-msg failed:', error);
}