export const sectionIconMap: Record<string, string> = {
  Overview: '◈',
  'Direct Answers': '→',
  'Getting Started': '◎',
  Workflow: '⌘',
  Scripting: '{}',
  Architecture: '▣',
  Assets: '◫',
  UI: '◩',
  Graphics: '✦',
  Physics: '⬡',
  Animation: '◌',
  Audio: '♪',
  Systems: '⟲',
  Optimization: '↯',
  Builds: '⬢',
  Multiplayer: '⇄',
  XR: '◍',
  Packages: '▤',
  Platforms: '⌁',
  Testing: '✓',
  Troubleshooting: '!',
  Resources: '⋯',
  Questions: '?',
};

export const sectionColorMap: Record<string, { fg: string; bg: string }> = {
  Overview: { fg: '#5b6cff', bg: 'rgba(91,108,255,0.14)' },
  'Direct Answers': { fg: '#ff6b4a', bg: 'rgba(255,107,74,0.14)' },
  'Getting Started': { fg: '#009b72', bg: 'rgba(0,155,114,0.14)' },
  Workflow: { fg: '#7d59ff', bg: 'rgba(125,89,255,0.14)' },
  Scripting: { fg: '#0d7eff', bg: 'rgba(13,126,255,0.14)' },
  Architecture: { fg: '#8f52d8', bg: 'rgba(143,82,216,0.14)' },
  Assets: { fg: '#1a9b8b', bg: 'rgba(26,155,139,0.14)' },
  UI: { fg: '#ff5ca8', bg: 'rgba(255,92,168,0.14)' },
  Graphics: { fg: '#ff8a00', bg: 'rgba(255,138,0,0.14)' },
  Physics: { fg: '#4a93ff', bg: 'rgba(74,147,255,0.14)' },
  Animation: { fg: '#e15b73', bg: 'rgba(225,91,115,0.14)' },
  Audio: { fg: '#d661ff', bg: 'rgba(214,97,255,0.14)' },
  Systems: { fg: '#0b8bca', bg: 'rgba(11,139,202,0.14)' },
  Optimization: { fg: '#ef5f3c', bg: 'rgba(239,95,60,0.14)' },
  Builds: { fg: '#6f7a87', bg: 'rgba(111,122,135,0.16)' },
  Multiplayer: { fg: '#2d93ff', bg: 'rgba(45,147,255,0.14)' },
  XR: { fg: '#7d4dff', bg: 'rgba(125,77,255,0.14)' },
  Packages: { fg: '#0d8f77', bg: 'rgba(13,143,119,0.14)' },
  Platforms: { fg: '#ff7a2f', bg: 'rgba(255,122,47,0.14)' },
  Testing: { fg: '#4b9b42', bg: 'rgba(75,155,66,0.14)' },
  Troubleshooting: { fg: '#ff5f45', bg: 'rgba(255,95,69,0.14)' },
  Resources: { fg: '#6a7482', bg: 'rgba(106,116,130,0.14)' },
  Questions: { fg: '#ff7c3a', bg: 'rgba(255,124,58,0.14)' },
};

export function getSectionIcon(section: string) {
  return sectionIconMap[section] ?? '•';
}

export function getSectionColors(section: string) {
  return sectionColorMap[section] ?? { fg: '#0071e3', bg: 'rgba(0,113,227,0.14)' };
}
