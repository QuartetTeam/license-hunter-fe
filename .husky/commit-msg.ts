import fs from 'fs';

const commitMsgFile = process.argv[2];


if (!commitMsgFile) {
    console.error('커밋 메시지 파일 경로가 제공되지 않았습니다.');
    process.exit(1);
}
  
const commitMsg = fs.readFileSync(commitMsgFile, 'utf8').trim();

const commitPattern = /^(\[[A-Z]+-[0-9]+\] )?(✨ Feat|🎯 Fix|🚧 Progress|🐛 Bug|🎨 Design|💄 Style|♻️ Refactor|💡 Comment|📋 Docs|✅ Test|🔖 Chore|📝 Rename|🔥 Remove|📌 Init|🚑 !BREAKING CHANGE|🔔 Merge Request|⚡️ Perf|💚 CI): .+/;

if (!commitPattern.test(commitMsg)) {
    console.error('ERROR: 커밋 메시지는 [티켓번호](생략가능) + 깃모지 + 타입 + 콜론(:) 형식을 따라야 합니다.');
    console.error('예: [QUAR-1] ✨ Feat: 새로운 기능 추가');
    process.exit(1);
}