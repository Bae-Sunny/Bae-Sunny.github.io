// GomMix Folder Management - Figma Plugin
// 이 플러그인은 전체 프로토타입 구조를 자동으로 생성합니다.

// 색상 정의
const COLORS = {
  primaryBlue: { r: 0.176, g: 0.42, b: 1 },
  gray900: { r: 0.04, g: 0.04, b: 0.04 },
  gray800: { r: 0.1, g: 0.1, b: 0.1 },
  gray700: { r: 0.165, g: 0.165, b: 0.165 },
  gray500: { r: 0.53, g: 0.53, b: 0.53 },
  white: { r: 1, g: 1, b: 1 },
  error: { r: 1, g: 0.267, b: 0.267 }
};

// 메인 함수
async function main() {
  figma.ui.onmessage = async (msg) => {
    if (msg.type === 'create-prototype') {
      await createPrototype();
      figma.closePlugin('✅ GomMix 프로토타입이 생성되었습니다!');
    }
  };

  figma.showUI(__html__, { width: 400, height: 300 });
}

// 프로토타입 생성
async function createPrototype() {
  // 폰트 로드
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "SemiBold" });

  // 1. Design System 페이지
  const designSystemPage = createDesignSystemPage();
  
  // 2. Components 페이지
  const componentsPage = createComponentsPage();
  
  // 3. Screens 페이지
  const screensPage = createScreensPage();

  figma.currentPage = screensPage;
  figma.viewport.scrollAndZoomIntoView([screensPage.children[0]]);
}

// Design System 페이지 생성
function createDesignSystemPage() {
  const page = figma.createPage();
  page.name = "🎨 Design System";
  
  const frame = figma.createFrame();
  frame.name = "Colors";
  frame.x = 0;
  frame.y = 0;
  frame.resize(600, 200);
  frame.fills = [{ type: 'SOLID', color: COLORS.gray900 }];
  
  // 색상 카드들 생성
  const colorCards = [
    { name: "Primary/Blue", color: COLORS.primaryBlue },
    { name: "Gray/900", color: COLORS.gray900 },
    { name: "Gray/800", color: COLORS.gray800 },
    { name: "Gray/700", color: COLORS.gray700 },
    { name: "White", color: COLORS.white }
  ];
  
  colorCards.forEach((card, index) => {
    const rect = figma.createRectangle();
    rect.name = card.name;
    rect.x = 20 + (index * 116);
    rect.y = 20;
    rect.resize(100, 100);
    rect.fills = [{ type: 'SOLID', color: card.color }];
    rect.cornerRadius = 8;
    
    const text = figma.createText();
    text.name = `${card.name}-Label`;
    text.x = rect.x;
    text.y = rect.y + 110;
    text.characters = card.name;
    text.fontSize = 12;
    text.fills = [{ type: 'SOLID', color: COLORS.white }];
    
    frame.appendChild(rect);
    frame.appendChild(text);
  });
  
  page.appendChild(frame);
  return page;
}

// Components 페이지 생성
function createComponentsPage() {
  const page = figma.createPage();
  page.name = "🧩 Components";
  
  let yOffset = 0;
  
  // Folder Card Component Set
  const folderCardSet = createFolderCardComponents();
  folderCardSet.x = 40;
  folderCardSet.y = yOffset;
  page.appendChild(folderCardSet);
  yOffset += 200;
  
  // File Card Component Set
  const fileCardSet = createFileCardComponents();
  fileCardSet.x = 40;
  fileCardSet.y = yOffset;
  page.appendChild(fileCardSet);
  yOffset += 200;
  
  // Sidebar Item Component Set
  const sidebarItemSet = createSidebarItemComponents();
  sidebarItemSet.x = 40;
  sidebarItemSet.y = yOffset;
  page.appendChild(sidebarItemSet);
  yOffset += 200;
  
  // Sort Button Component Set
  const sortButtonSet = createSortButtonComponents();
  sortButtonSet.x = 40;
  sortButtonSet.y = yOffset;
  page.appendChild(sortButtonSet);
  yOffset += 200;
  
  // Context Menu Components
  const contextMenuGrid = createContextMenuGrid();
  contextMenuGrid.x = 40;
  contextMenuGrid.y = yOffset;
  page.appendChild(contextMenuGrid);
  
  const contextMenuFolder = createContextMenuFolder();
  contextMenuFolder.x = 260;
  contextMenuFolder.y = yOffset;
  page.appendChild(contextMenuFolder);
  yOffset += 200;
  
  // Modal Component
  const modal = createModalComponent();
  modal.x = 40;
  modal.y = yOffset;
  page.appendChild(modal);
  
  return page;
}

// Folder Card Components 생성
function createFolderCardComponents() {
  const frame = figma.createFrame();
  frame.name = "Card/Folder";
  frame.resize(700, 140);
  frame.fills = [];
  
  const variants = ['Default', 'Selected', 'DragOver', 'Renaming'];
  
  variants.forEach((variant, index) => {
    const component = createFolderCard(variant);
    component.x = index * 180;
    component.y = 0;
    frame.appendChild(component);
  });
  
  // Component Set으로 변환
  const componentSet = figma.combineAsVariants([...frame.children], frame);
  componentSet.name = "Card/Folder";
  
  return componentSet;
}

// 개별 Folder Card 생성
function createFolderCard(state) {
  const card = figma.createFrame();
  card.name = `State=${state}`;
  card.resize(160, 140);
  card.cornerRadius = 8;
  card.fills = [{ type: 'SOLID', color: COLORS.gray800 }];
  
  // 상태에 따른 스타일
  if (state === 'Selected') {
    card.strokes = [{ type: 'SOLID', color: COLORS.primaryBlue }];
    card.strokeWeight = 2;
  } else if (state === 'DragOver') {
    card.strokes = [{ type: 'SOLID', color: COLORS.primaryBlue }];
    card.strokeWeight = 2;
    card.fills = [
      { type: 'SOLID', color: COLORS.gray800 },
      { type: 'SOLID', color: { ...COLORS.primaryBlue, a: 0.1 } }
    ];
  } else {
    card.strokes = [{ type: 'SOLID', color: COLORS.gray700 }];
    card.strokeWeight = 1;
  }
  
  // Auto Layout 설정
  card.layoutMode = 'VERTICAL';
  card.primaryAxisAlignItems = 'CENTER';
  card.counterAxisAlignItems = 'CENTER';
  card.paddingLeft = 16;
  card.paddingRight = 16;
  card.paddingTop = 16;
  card.paddingBottom = 16;
  card.itemSpacing = 12;
  
  // 그림자 효과
  card.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.2 },
    offset: { x: 0, y: 2 },
    radius: 8,
    visible: true
  }];
  
  // 아이콘
  const icon = figma.createText();
  icon.name = "Icon";
  icon.characters = "📁";
  icon.fontSize = 48;
  
  // Info Container
  const infoContainer = figma.createFrame();
  infoContainer.name = "InfoContainer";
  infoContainer.layoutMode = 'VERTICAL';
  infoContainer.primaryAxisAlignItems = 'CENTER';
  infoContainer.itemSpacing = 4;
  infoContainer.fills = [];
  
  if (state === 'Renaming') {
    // Input Field
    const inputField = figma.createFrame();
    inputField.name = "InputField";
    inputField.resize(128, 32);
    inputField.cornerRadius = 4;
    inputField.fills = [{ type: 'SOLID', color: COLORS.gray900 }];
    inputField.strokes = [{ type: 'SOLID', color: COLORS.primaryBlue }];
    inputField.strokeWeight = 2;
    inputField.layoutMode = 'HORIZONTAL';
    inputField.primaryAxisAlignItems = 'CENTER';
    inputField.paddingLeft = 8;
    inputField.paddingRight = 8;
    
    const inputText = figma.createText();
    inputText.name = "Input";
    inputText.characters = "새 폴더";
    inputText.fontSize = 14;
    inputText.fills = [{ type: 'SOLID', color: COLORS.white }];
    
    inputField.appendChild(inputText);
    infoContainer.appendChild(inputField);
  } else {
    // 폴더명
    const folderName = figma.createText();
    folderName.name = "FolderName";
    folderName.characters = "폴더명";
    folderName.fontSize = 14;
    folderName.textAlignHorizontal = 'CENTER';
    folderName.fills = [{ type: 'SOLID', color: COLORS.white }];
    infoContainer.appendChild(folderName);
  }
  
  // 아이템 개수
  const itemCount = figma.createText();
  itemCount.name = "ItemCount";
  itemCount.characters = state === 'Renaming' ? "0개 항목" : "3개 항목";
  itemCount.fontSize = 12;
  itemCount.textAlignHorizontal = 'CENTER';
  itemCount.fills = [{ type: 'SOLID', color: COLORS.gray500 }];
  infoContainer.appendChild(itemCount);
  
  card.appendChild(icon);
  card.appendChild(infoContainer);
  
  return card;
}

// File Card Components 생성
function createFileCardComponents() {
  const frame = figma.createFrame();
  frame.name = "Card/File";
  frame.resize(700, 140);
  frame.fills = [];
  
  const variants = [
    { type: 'Video', state: 'Default' },
    { type: 'Audio', state: 'Default' },
    { type: 'Video', state: 'Selected' },
    { type: 'Video', state: 'Dragging' }
  ];
  
  variants.forEach((variant, index) => {
    const component = createFileCard(variant.type, variant.state);
    component.x = index * 180;
    component.y = 0;
    frame.appendChild(component);
  });
  
  const componentSet = figma.combineAsVariants([...frame.children], frame);
  componentSet.name = "Card/File";
  
  return componentSet;
}

// 개별 File Card 생성
function createFileCard(type, state) {
  const card = figma.createFrame();
  card.name = `Type=${type}, State=${state}`;
  card.resize(160, 140);
  card.cornerRadius = 8;
  card.fills = [{ type: 'SOLID', color: COLORS.gray800 }];
  card.strokes = [{ type: 'SOLID', color: state === 'Selected' ? COLORS.primaryBlue : COLORS.gray700 }];
  card.strokeWeight = state === 'Selected' ? 2 : 1;
  
  if (state === 'Dragging') {
    card.opacity = 0.5;
  }
  
  card.layoutMode = 'VERTICAL';
  card.primaryAxisAlignItems = 'CENTER';
  card.paddingLeft = 16;
  card.paddingRight = 16;
  card.paddingTop = 16;
  card.paddingBottom = 16;
  card.itemSpacing = 12;
  
  card.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: state === 'Dragging' ? 0.3 : 0.2 },
    offset: { x: 0, y: state === 'Dragging' ? 4 : 2 },
    radius: state === 'Dragging' ? 16 : 8,
    visible: true
  }];
  
  // Thumbnail
  const thumbnail = figma.createFrame();
  thumbnail.name = "Thumbnail";
  thumbnail.resize(128, 72);
  thumbnail.cornerRadius = 4;
  thumbnail.fills = [{ type: 'SOLID', color: COLORS.gray700 }];
  thumbnail.layoutMode = 'VERTICAL';
  thumbnail.primaryAxisAlignItems = 'CENTER';
  thumbnail.counterAxisAlignItems = 'CENTER';
  
  const typeIcon = figma.createText();
  typeIcon.name = "TypeIcon";
  typeIcon.characters = type === 'Video' ? "🎬" : "🎵";
  typeIcon.fontSize = 32;
  thumbnail.appendChild(typeIcon);
  
  // Info Container
  const infoContainer = figma.createFrame();
  infoContainer.name = "InfoContainer";
  infoContainer.layoutMode = 'VERTICAL';
  infoContainer.primaryAxisAlignItems = 'MIN';
  infoContainer.itemSpacing = 2;
  infoContainer.fills = [];
  
  const fileName = figma.createText();
  fileName.name = "FileName";
  fileName.characters = type === 'Video' ? "video.mp4" : "audio.mp3";
  fileName.fontSize = 14;
  fileName.fills = [{ type: 'SOLID', color: COLORS.white }];
  
  const duration = figma.createText();
  duration.name = "Duration";
  duration.characters = type === 'Video' ? "03:24" : "02:15";
  duration.fontSize = 12;
  duration.fills = [{ type: 'SOLID', color: COLORS.gray500 }];
  
  const fileSize = figma.createText();
  fileSize.name = "FileSize";
  fileSize.characters = type === 'Video' ? "52MB" : "3.2MB";
  fileSize.fontSize = 12;
  fileSize.fills = [{ type: 'SOLID', color: COLORS.gray500 }];
  
  infoContainer.appendChild(fileName);
  infoContainer.appendChild(duration);
  infoContainer.appendChild(fileSize);
  
  card.appendChild(thumbnail);
  card.appendChild(infoContainer);
  
  return card;
}

// Sidebar Item Components 생성
function createSidebarItemComponents() {
  const frame = figma.createFrame();
  frame.name = "Sidebar/FolderItem";
  frame.resize(900, 40);
  frame.fills = [];
  
  const variants = ['Default', 'Hover', 'Active'];
  
  variants.forEach((variant, index) => {
    const component = createSidebarItem(variant);
    component.x = index * 220;
    component.y = 0;
    frame.appendChild(component);
  });
  
  const componentSet = figma.combineAsVariants([...frame.children], frame);
  componentSet.name = "Sidebar/FolderItem";
  
  return componentSet;
}

// 개별 Sidebar Item 생성
function createSidebarItem(state) {
  const item = figma.createFrame();
  item.name = `State=${state}`;
  item.resize(208, 40);
  item.cornerRadius = 6;
  item.fills = state !== 'Default' ? [{ type: 'SOLID', color: COLORS.gray700 }] : [];
  
  item.layoutMode = 'HORIZONTAL';
  item.primaryAxisAlignItems = 'SPACE_BETWEEN';
  item.paddingLeft = 12;
  item.paddingRight = 12;
  item.paddingTop = 8;
  item.paddingBottom = 8;
  item.itemSpacing = 8;
  
  const icon = figma.createText();
  icon.name = "Icon";
  icon.characters = "📁";
  icon.fontSize = 16;
  icon.fills = [{ type: 'SOLID', color: state === 'Active' ? COLORS.primaryBlue : COLORS.white }];
  
  const folderName = figma.createText();
  folderName.name = "FolderName";
  folderName.characters = "폴더명";
  folderName.fontSize = 14;
  folderName.fills = [{ type: 'SOLID', color: state === 'Active' ? COLORS.primaryBlue : COLORS.white }];
  folderName.layoutGrow = 1;
  
  const count = figma.createText();
  count.name = "Count";
  count.characters = "[3]";
  count.fontSize = 12;
  count.fills = [{ type: 'SOLID', color: COLORS.gray500 }];
  
  item.appendChild(icon);
  item.appendChild(folderName);
  item.appendChild(count);
  
  return item;
}

// Sort Button Components 생성
function createSortButtonComponents() {
  const frame = figma.createFrame();
  frame.name = "Button/Sort";
  frame.resize(700, 40);
  frame.fills = [];
  
  const variants = [
    { type: 'Name', state: 'Default' },
    { type: 'Name', state: 'Active' },
    { type: 'Date', state: 'Default' },
    { type: 'Size', state: 'Default' }
  ];
  
  variants.forEach((variant, index) => {
    const component = createSortButton(variant.type, variant.state);
    component.x = index * 120;
    component.y = 0;
    frame.appendChild(component);
  });
  
  const componentSet = figma.combineAsVariants([...frame.children], frame);
  componentSet.name = "Button/Sort";
  
  return componentSet;
}

// 개별 Sort Button 생성
function createSortButton(type, state) {
  const button = figma.createFrame();
  button.name = `Type=${type}, State=${state}`;
  button.cornerRadius = 6;
  button.fills = [{ type: 'SOLID', color: state === 'Active' ? COLORS.primaryBlue : COLORS.gray800 }];
  button.strokes = state === 'Default' ? [{ type: 'SOLID', color: COLORS.gray700 }] : [];
  button.strokeWeight = state === 'Default' ? 1 : 0;
  
  button.layoutMode = 'HORIZONTAL';
  button.primaryAxisSizingMode = 'AUTO';
  button.paddingLeft = 12;
  button.paddingRight = 12;
  button.paddingTop = 8;
  button.paddingBottom = 8;
  button.itemSpacing = 6;
  
  const typeNames = { 'Name': '이름', 'Date': '날짜', 'Size': '크기' };
  
  const label = figma.createText();
  label.name = "Label";
  label.characters = typeNames[type];
  label.fontSize = 14;
  label.fills = [{ type: 'SOLID', color: COLORS.white }];
  
  const icon = figma.createText();
  icon.name = "Icon";
  icon.characters = "▼";
  icon.fontSize = 12;
  icon.fills = [{ type: 'SOLID', color: state === 'Active' ? COLORS.white : COLORS.gray500 }];
  
  button.appendChild(label);
  button.appendChild(icon);
  
  return button;
}

// Context Menu Grid 생성
function createContextMenuGrid() {
  const menu = figma.createComponent();
  menu.name = "ContextMenu/Grid";
  menu.resize(180, 40);
  menu.cornerRadius = 8;
  menu.fills = [{ type: 'SOLID', color: COLORS.gray800 }];
  menu.strokes = [{ type: 'SOLID', color: COLORS.gray700 }];
  menu.strokeWeight = 1;
  
  menu.layoutMode = 'VERTICAL';
  menu.paddingLeft = 4;
  menu.paddingRight = 4;
  menu.paddingTop = 4;
  menu.paddingBottom = 4;
  
  menu.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.4 },
    offset: { x: 0, y: 8 },
    radius: 24,
    visible: true
  }];
  
  const menuItem = createMenuItem("📁", "새 폴더");
  menu.appendChild(menuItem);
  
  return menu;
}

// Context Menu Folder 생성
function createContextMenuFolder() {
  const menu = figma.createComponent();
  menu.name = "ContextMenu/Folder";
  menu.resize(180, 80);
  menu.cornerRadius = 8;
  menu.fills = [{ type: 'SOLID', color: COLORS.gray800 }];
  menu.strokes = [{ type: 'SOLID', color: COLORS.gray700 }];
  menu.strokeWeight = 1;
  
  menu.layoutMode = 'VERTICAL';
  menu.paddingLeft = 4;
  menu.paddingRight = 4;
  menu.paddingTop = 4;
  menu.paddingBottom = 4;
  
  menu.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.4 },
    offset: { x: 0, y: 8 },
    radius: 24,
    visible: true
  }];
  
  const menuItem1 = createMenuItem("✏️", "이름 변경");
  const menuItem2 = createMenuItem("🗑️", "삭제", true);
  
  menu.appendChild(menuItem1);
  menu.appendChild(menuItem2);
  
  return menu;
}

// Menu Item Helper
function createMenuItem(icon, label, isDestructive = false) {
  const item = figma.createFrame();
  item.name = `MenuItem_${label}`;
  item.resize(172, 36);
  item.cornerRadius = 4;
  item.fills = [];
  
  item.layoutMode = 'HORIZONTAL';
  item.paddingLeft = 12;
  item.paddingRight = 12;
  item.paddingTop = 8;
  item.paddingBottom = 8;
  item.itemSpacing = 8;
  
  const iconText = figma.createText();
  iconText.name = "Icon";
  iconText.characters = icon;
  iconText.fontSize = 16;
  
  const labelText = figma.createText();
  labelText.name = "Label";
  labelText.characters = label;
  labelText.fontSize = 14;
  labelText.fills = [{ type: 'SOLID', color: isDestructive ? COLORS.error : COLORS.white }];
  
  item.appendChild(iconText);
  item.appendChild(labelText);
  
  return item;
}

// Modal Component 생성
function createModalComponent() {
  const modal = figma.createComponent();
  modal.name = "Modal/DeleteConfirm";
  modal.resize(400, 200);
  modal.cornerRadius = 12;
  modal.fills = [{ type: 'SOLID', color: COLORS.gray800 }];
  modal.strokes = [{ type: 'SOLID', color: COLORS.gray700 }];
  modal.strokeWeight = 1;
  
  modal.layoutMode = 'VERTICAL';
  modal.paddingLeft = 24;
  modal.paddingRight = 24;
  modal.paddingTop = 24;
  modal.paddingBottom = 24;
  modal.itemSpacing = 20;
  
  modal.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.4 },
    offset: { x: 0, y: 8 },
    radius: 24,
    visible: true
  }];
  
  // Header
  const header = figma.createText();
  header.name = "Header";
  header.characters = "폴더 삭제";
  header.fontSize = 18;
  header.fontName = { family: "Inter", style: "SemiBold" };
  header.fills = [{ type: 'SOLID', color: COLORS.white }];
  
  // Body
  const body = figma.createText();
  body.name = "Body";
  body.characters = "폴더에 3개의 파일이 있습니다. 폴더와 모든 파일을 삭제하시겠습니까?";
  body.fontSize = 14;
  body.fills = [{ type: 'SOLID', color: COLORS.gray500 }];
  body.textAutoResize = 'HEIGHT';
  body.resize(352, body.height);
  
  // Footer
  const footer = figma.createFrame();
  footer.name = "Footer";
  footer.layoutMode = 'HORIZONTAL';
  footer.primaryAxisSizingMode = 'FIXED';
  footer.counterAxisSizingMode = 'AUTO';
  footer.primaryAxisAlignItems = 'MAX';
  footer.itemSpacing = 12;
  footer.fills = [];
  footer.resize(352, 36);
  
  const cancelButton = createButton("취소", false);
  const deleteButton = createButton("삭제", true);
  
  footer.appendChild(cancelButton);
  footer.appendChild(deleteButton);
  
  modal.appendChild(header);
  modal.appendChild(body);
  modal.appendChild(footer);
  
  return modal;
}

// Button Helper
function createButton(label, isDestructive = false) {
  const button = figma.createFrame();
  button.name = `Button_${label}`;
  button.resize(80, 36);
  button.cornerRadius = 6;
  button.fills = [{ type: 'SOLID', color: isDestructive ? COLORS.error : COLORS.gray900 }];
  
  if (!isDestructive) {
    button.strokes = [{ type: 'SOLID', color: COLORS.gray700 }];
    button.strokeWeight = 1;
  }
  
  button.layoutMode = 'HORIZONTAL';
  button.primaryAxisAlignItems = 'CENTER';
  button.counterAxisAlignItems = 'CENTER';
  
  const text = figma.createText();
  text.name = "Label";
  text.characters = label;
  text.fontSize = 14;
  text.fills = [{ type: 'SOLID', color: COLORS.white }];
  
  button.appendChild(text);
  
  return button;
}

// Screens 페이지 생성
function createScreensPage() {
  const page = figma.createPage();
  page.name = "📱 Screens";
  
  // Base Layout 생성
  const baseLayout = createBaseLayout();
  baseLayout.x = 0;
  baseLayout.y = 0;
  page.appendChild(baseLayout);
  
  // 다른 화면들은 baseLayout을 복제해서 생성
  const withFiles = baseLayout.clone();
  withFiles.name = "02_With_Files";
  withFiles.x = 2000;
  withFiles.y = 0;
  page.appendChild(withFiles);
  
  return page;
}

// Base Layout 생성
function createBaseLayout() {
  const frame = figma.createFrame();
  frame.name = "00_Base_Layout";
  frame.resize(1920, 1080);
  frame.fills = [{ type: 'SOLID', color: COLORS.gray900 }];
  
  // Sidebar
  const sidebar = figma.createFrame();
  sidebar.name = "Sidebar";
  sidebar.x = 0;
  sidebar.y = 0;
  sidebar.resize(240, 1080);
  sidebar.fills = [{ type: 'SOLID', color: COLORS.gray800 }];
  sidebar.layoutMode = 'VERTICAL';
  sidebar.paddingLeft = 16;
  sidebar.paddingRight = 16;
  sidebar.paddingTop = 16;
  sidebar.paddingBottom = 16;
  sidebar.itemSpacing = 8;
  
  // Sidebar Header
  const sidebarHeader = figma.createText();
  sidebarHeader.name = "Header";
  sidebarHeader.characters = "📂 프로젝트 클립";
  sidebarHeader.fontSize = 18;
  sidebarHeader.fontName = { family: "Inter", style: "SemiBold" };
  sidebarHeader.fills = [{ type: 'SOLID', color: COLORS.white }];
  
  sidebar.appendChild(sidebarHeader);
  
  // Main Area
  const mainArea = figma.createFrame();
  mainArea.name = "MainArea";
  mainArea.x = 240;
  mainArea.y = 0;
  mainArea.resize(1680, 1080);
  mainArea.fills = [];
  mainArea.layoutMode = 'VERTICAL';
  mainArea.paddingLeft = 24;
  mainArea.paddingRight = 24;
  mainArea.paddingTop = 24;
  mainArea.paddingBottom = 24;
  mainArea.itemSpacing = 16;
  
  // Toolbar
  const toolbar = figma.createFrame();
  toolbar.name = "Toolbar";
  toolbar.layoutMode = 'HORIZONTAL';
  toolbar.primaryAxisSizingMode = 'AUTO';
  toolbar.counterAxisSizingMode = 'FIXED';
  toolbar.resize(1632, 60);
  toolbar.itemSpacing = 12;
  toolbar.fills = [];
  
  const sortLabel = figma.createText();
  sortLabel.name = "SortLabel";
  sortLabel.characters = "정렬:";
  sortLabel.fontSize = 14;
  sortLabel.fills = [{ type: 'SOLID', color: COLORS.white }];
  
  toolbar.appendChild(sortLabel);
  
  // Grid Area
  const gridArea = figma.createFrame();
  gridArea.name = "GridArea";
  gridArea.layoutMode = 'HORIZONTAL';
  gridArea.layoutWrap = 'WRAP';
  gridArea.primaryAxisSizingMode = 'AUTO';
  gridArea.counterAxisSizingMode = 'AUTO';
  gridArea.itemSpacing = 16;
  gridArea.fills = [];
  
  mainArea.appendChild(toolbar);
  mainArea.appendChild(gridArea);
  
  frame.appendChild(sidebar);
  frame.appendChild(mainArea);
  
  return frame;
}

// UI HTML
figma.showUI(`
<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .container {
      background: white;
      border-radius: 12px;
      padding: 32px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      text-align: center;
      max-width: 350px;
    }
    h1 {
      font-size: 24px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 8px;
    }
    .subtitle {
      font-size: 14px;
      color: #666;
      margin-bottom: 24px;
    }
    .features {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 24px;
      text-align: left;
    }
    .feature-item {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      font-size: 13px;
      color: #333;
    }
    .feature-item:last-child {
      margin-bottom: 0;
    }
    .feature-item span {
      margin-right: 8px;
    }
    button {
      width: 100%;
      padding: 14px 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
    }
    button:active {
      transform: translateY(0);
    }
    .info {
      margin-top: 16px;
      font-size: 12px;
      color: #999;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 GomMix 프로토타입</h1>
    <p class="subtitle">폴더 관리 시스템을 자동으로 생성합니다</p>
    
    <div class="features">
      <div class="feature-item">
        <span>✅</span>
        <span>Design System (색상, 폰트)</span>
      </div>
      <div class="feature-item">
        <span>✅</span>
        <span>Components (8개 컴포넌트)</span>
      </div>
      <div class="feature-item">
        <span>✅</span>
        <span>Base Layout (1920x1080)</span>
      </div>
      <div class="feature-item">
        <span>✅</span>
        <span>Screens (화면 구조)</span>
      </div>
    </div>
    
    <button id="create">프로토타입 생성하기 🚀</button>
    
    <p class="info">생성에는 약 10초 정도 소요됩니다</p>
  </div>
  
  <script>
    document.getElementById('create').onclick = () => {
      parent.postMessage({ pluginMessage: { type: 'create-prototype' } }, '*');
    };
  </script>
</body>
</html>
`, { width: 400, height: 500 });

main();
