/* @ds-bundle: {"format":3,"namespace":"KevinTsengDesignSystem_087052","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"9b9031a58635","components/buttons/IconButton.jsx":"470a0726372f","components/data/Badge.jsx":"96d3ac5b59f5","components/data/Tag.jsx":"dd449f6ad337","components/forms/Input.jsx":"f7d50894de84","components/forms/Switch.jsx":"1a5addd28d71","components/surfaces/Card.jsx":"42cf79ab8c00","components/surfaces/Tabs.jsx":"aa009ee8ef5c","ui_kits/portfolio/AboutScreen.jsx":"8f16050ca6d7","ui_kits/portfolio/AppsScreen.jsx":"330e6e0a8d04","ui_kits/portfolio/CaseStudyScreen.jsx":"2eb8d1ab0c23","ui_kits/portfolio/GalleryScreen.jsx":"da87185059f7","ui_kits/portfolio/HomeScreen.jsx":"1d254b1de46f","ui_kits/portfolio/SplashScreen.jsx":"38da1bb194ae","ui_kits/portfolio/shared.jsx":"69f974a6d8a6","ui_kits/portfolio/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KevinTsengDesignSystem_087052 = window.KevinTsengDesignSystem_087052 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.kt-btn {
  --_bg: var(--accent); --_fg: var(--on-accent); --_bd: transparent;
  display: inline-flex; align-items: center; justify-content: center; gap: var(--space-2);
  font-family: var(--font-display); font-weight: var(--w-medium);
  letter-spacing: -0.005em; line-height: 1; white-space: nowrap;
  border: var(--border-w) solid var(--_bd); background: var(--_bg); color: var(--_fg);
  border-radius: var(--radius-md); cursor: pointer; text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-out),
              background var(--dur-fast) var(--ease-out),
              box-shadow var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
}
.kt-btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.kt-btn:active { transform: scale(var(--press-scale)); }
.kt-btn[disabled] { opacity: 0.45; cursor: not-allowed; pointer-events: none; }
.kt-btn svg { width: 1.05em; height: 1.05em; }

/* sizes */
.kt-btn--sm { font-size: var(--text-body-sm); padding: 0 var(--space-3); height: 32px; }
.kt-btn--md { font-size: var(--text-body); padding: 0 var(--space-5); height: 42px; }
.kt-btn--lg { font-size: var(--text-body-lg); padding: 0 var(--space-7); height: 52px; border-radius: var(--radius-lg); }

/* variants */
.kt-btn--primary { --_bg: var(--accent); --_fg: var(--on-accent); }
.kt-btn--primary:hover { --_bg: var(--accent-hover); box-shadow: var(--shadow-accent); }
.kt-btn--secondary { --_bg: var(--surface); --_fg: var(--text-primary); --_bd: var(--border-strong); }
.kt-btn--secondary:hover { --_bd: var(--text-primary); box-shadow: var(--shadow-sm); }
.kt-btn--ghost { --_bg: transparent; --_fg: var(--text-primary); }
.kt-btn--ghost:hover { --_bg: var(--surface-sunken); }
.kt-btn--danger { --_bg: var(--red-500); --_fg: #fff; }
.kt-btn--danger:hover { --_bg: color-mix(in srgb, var(--red-500) 86%, #000); }
.kt-btn--full { width: 100%; }
`;
let injected = false;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  const s = document.createElement('style');
  s.setAttribute('data-kt', 'button');
  s.textContent = CSS;
  document.head.appendChild(s);
  injected = true;
}

/**
 * Primary action button. Variants: primary | secondary | ghost | danger.
 */
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  ensureCSS();
  const Tag = as;
  const cls = ['kt-btn', `kt-btn--${variant}`, `kt-btn--${size}`, fullWidth ? 'kt-btn--full' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft, children != null && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.kt-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  border: var(--border-w) solid transparent; background: transparent; color: var(--text-secondary);
  border-radius: var(--radius-md); cursor: pointer; padding: 0;
  transition: transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
}
.kt-iconbtn:hover { background: var(--surface-sunken); color: var(--text-primary); }
.kt-iconbtn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.kt-iconbtn:active { transform: scale(var(--press-scale)); }
.kt-iconbtn[disabled] { opacity: 0.4; pointer-events: none; }
.kt-iconbtn svg, .kt-iconbtn i { width: 1.15em; height: 1.15em; display: block; }

.kt-iconbtn--sm { width: 32px; height: 32px; font-size: 16px; }
.kt-iconbtn--md { width: 42px; height: 42px; font-size: 18px; }
.kt-iconbtn--lg { width: 52px; height: 52px; font-size: 22px; border-radius: var(--radius-lg); }

.kt-iconbtn--outline { border-color: var(--border-strong); color: var(--text-primary); }
.kt-iconbtn--outline:hover { border-color: var(--text-primary); background: var(--surface); }
.kt-iconbtn--solid { background: var(--accent); color: var(--on-accent); }
.kt-iconbtn--solid:hover { background: var(--accent-hover); color: var(--on-accent); box-shadow: var(--shadow-accent); }
`;
let injected = false;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  const s = document.createElement('style');
  s.setAttribute('data-kt', 'iconbutton');
  s.textContent = CSS;
  document.head.appendChild(s);
  injected = true;
}

/** Square icon-only button (close, menu, next, like). Always pass `aria-label`. */
function IconButton({
  variant = 'ghost',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  ensureCSS();
  const cls = ['kt-iconbtn', `kt-iconbtn--${variant}`, `kt-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.kt-badge { display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-display);
  font-weight: var(--w-semibold); font-size: var(--text-caption); line-height: 1; padding: 4px 9px;
  border-radius: var(--radius-sm); background: var(--surface-sunken); color: var(--text-secondary); }
.kt-badge--success { background: var(--green-50); color: var(--green-500); }
.kt-badge--warning { background: var(--amber-50); color: #8a6400; }
.kt-badge--danger { background: var(--red-50); color: var(--red-500); }
.kt-badge--accent { background: var(--accent-tint); color: var(--blue-700); }
.kt-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.kt-badge--count { min-width: 20px; height: 20px; padding: 0 6px; justify-content: center;
  border-radius: var(--radius-full); background: var(--pop); color: #fff; font-family: var(--font-mono); }
`;
let injected = false;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  const s = document.createElement('style');
  s.setAttribute('data-kt', 'badge');
  s.textContent = CSS;
  document.head.appendChild(s);
  injected = true;
}

/** Compact status/label badge. Use `count` for notification numbers. */
function Badge({
  variant = 'default',
  dot = false,
  count = false,
  className = '',
  children,
  ...rest
}) {
  ensureCSS();
  const cls = ['kt-badge', variant !== 'default' ? `kt-badge--${variant}` : '', count ? 'kt-badge--count' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && !count && /*#__PURE__*/React.createElement("span", {
    className: "kt-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.kt-tag { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-mono);
  font-size: var(--text-caption); line-height: 1; padding: 6px 12px; border-radius: var(--radius-full);
  background: var(--surface-sunken); color: var(--text-secondary); box-shadow: var(--inset-hairline);
  white-space: nowrap; transition: all var(--dur-fast) var(--ease-out); }
.kt-tag--accent { background: var(--accent-tint); color: var(--blue-700); box-shadow: none; }
.kt-tag--pop { background: var(--pop-tint); color: var(--azure-600); box-shadow: none; }
.kt-tag--solid { background: var(--surface-inverse); color: #fff; box-shadow: none; }
.kt-tag--interactive { cursor: pointer; }
.kt-tag--interactive:hover { color: var(--text-primary); border: none; box-shadow: inset 0 0 0 1px var(--border-strong); }
.kt-tag[data-active="true"] { background: var(--accent); color: #fff; box-shadow: none; }
.kt-tag__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
`;
let injected = false;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  const s = document.createElement('style');
  s.setAttribute('data-kt', 'tag');
  s.textContent = CSS;
  document.head.appendChild(s);
  injected = true;
}

/** Mono pill for categories, filters and metadata. */
function Tag({
  variant = 'default',
  dot = false,
  active = false,
  interactive = false,
  className = '',
  children,
  ...rest
}) {
  ensureCSS();
  const cls = ['kt-tag', variant !== 'default' ? `kt-tag--${variant}` : '', interactive ? 'kt-tag--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    "data-active": active
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "kt-tag__dot"
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.kt-field { display: flex; flex-direction: column; gap: var(--space-2); font-family: var(--font-sans); }
.kt-field__label { font-family: var(--font-mono); font-size: var(--text-micro); letter-spacing: var(--ls-label);
  text-transform: uppercase; color: var(--text-secondary); }
.kt-field__hint { font-size: var(--text-caption); color: var(--text-muted); }
.kt-field__err { font-size: var(--text-caption); color: var(--red-500); }
.kt-input-wrap { position: relative; display: flex; align-items: center; }
.kt-input {
  width: 100%; font-family: var(--font-sans); font-size: var(--text-body); color: var(--text-primary);
  background: var(--surface); border: var(--border-w) solid var(--border-strong); border-radius: var(--radius-md);
  height: 44px; padding: 0 var(--space-4); outline: none;
  transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
.kt-input::placeholder { color: var(--text-muted); }
.kt-input:hover { border-color: var(--text-muted); }
.kt-input:focus { border-color: var(--accent); box-shadow: var(--focus-ring); }
.kt-input--icon { padding-left: 40px; }
.kt-input-wrap__icon { position: absolute; left: 12px; color: var(--text-muted); display: flex; pointer-events: none; }
.kt-input-wrap__icon svg, .kt-input-wrap__icon i { width: 18px; height: 18px; }
.kt-field--invalid .kt-input { border-color: var(--red-500); }
.kt-field--invalid .kt-input:focus { box-shadow: 0 0 0 3px var(--red-50); }
.kt-input[disabled] { background: var(--surface-sunken); color: var(--text-muted); cursor: not-allowed; }
`;
let injected = false;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  const s = document.createElement('style');
  s.setAttribute('data-kt', 'input');
  s.textContent = CSS;
  document.head.appendChild(s);
  injected = true;
}

/** Labelled text input with optional leading icon, hint and error. */
function Input({
  label,
  hint,
  error,
  icon = null,
  id,
  className = '',
  ...rest
}) {
  ensureCSS();
  const fieldId = id || (label ? `f-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ['kt-field', error ? 'kt-field--invalid' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "kt-field__label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "kt-input-wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "kt-input-wrap__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: ['kt-input', icon ? 'kt-input--icon' : ''].filter(Boolean).join(' ')
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    className: "kt-field__err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "kt-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.kt-switch { display: inline-flex; align-items: center; gap: var(--space-3); cursor: pointer;
  font-family: var(--font-sans); font-size: var(--text-body-sm); color: var(--text-primary); user-select: none; }
.kt-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.kt-switch__track { position: relative; width: 44px; height: 26px; border-radius: var(--radius-full);
  background: var(--slate-300); transition: background var(--dur-base) var(--ease-out); flex-shrink: 0; }
.kt-switch__thumb { position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%;
  background: #fff; box-shadow: var(--shadow-sm); transition: transform var(--dur-base) var(--ease-spring); }
.kt-switch input:checked + .kt-switch__track { background: var(--accent); }
.kt-switch input:checked + .kt-switch__track .kt-switch__thumb { transform: translateX(18px); }
.kt-switch input:focus-visible + .kt-switch__track { box-shadow: var(--focus-ring); }
.kt-switch[data-disabled="true"] { opacity: 0.45; cursor: not-allowed; }
`;
let injected = false;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  const s = document.createElement('style');
  s.setAttribute('data-kt', 'switch');
  s.textContent = CSS;
  document.head.appendChild(s);
  injected = true;
}

/** Toggle switch with spring thumb. Controlled via `checked` / `onChange`. */
function Switch({
  checked,
  onChange,
  label,
  disabled = false,
  ...rest
}) {
  ensureCSS();
  return /*#__PURE__*/React.createElement("label", {
    className: "kt-switch",
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "kt-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kt-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.kt-card { display: flex; flex-direction: column; background: var(--surface); border-radius: var(--radius-lg);
  box-shadow: var(--inset-hairline), var(--shadow-sm); overflow: hidden; position: relative;
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out); }
.kt-card--interactive { cursor: pointer; }
.kt-card--interactive:hover { transform: translateY(-3px); box-shadow: var(--inset-hairline), var(--shadow-lg); }
.kt-card--flat { box-shadow: var(--inset-hairline); }
.kt-card--inverse { background: var(--surface-inverse); color: #fff; box-shadow: var(--shadow-md); }
.kt-card__media { position: relative; width: 100%; aspect-ratio: 16 / 10; overflow: hidden;
  background: linear-gradient(135deg, var(--slate-200), var(--slate-100)); }
.kt-card__media img { width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform var(--dur-slow) var(--ease-out); }
.kt-card--interactive:hover .kt-card__media img { transform: scale(1.04); }
.kt-card__body { padding: var(--space-5); display: flex; flex-direction: column; gap: var(--space-2); }
`;
let injected = false;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  const s = document.createElement('style');
  s.setAttribute('data-kt', 'card');
  s.textContent = CSS;
  document.head.appendChild(s);
  injected = true;
}

/** Surface container. Optional `media` slot renders a 16:10 image header. */
function Card({
  variant = 'raised',
  interactive = false,
  media = null,
  className = '',
  children,
  ...rest
}) {
  ensureCSS();
  const cls = ['kt-card', variant === 'flat' ? 'kt-card--flat' : '', variant === 'inverse' ? 'kt-card--inverse' : '', interactive ? 'kt-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    className: "kt-card__media"
  }, media), /*#__PURE__*/React.createElement("div", {
    className: "kt-card__body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
const CSS = `
.kt-tabs { display: inline-flex; align-items: center; gap: 2px; position: relative;
  font-family: var(--font-mono); }
.kt-tabs--underline { gap: var(--space-6); border-bottom: 1px solid var(--border); }
.kt-tabs--pill { background: var(--surface-sunken); padding: 4px; border-radius: var(--radius-full);
  box-shadow: var(--inset-hairline); }
.kt-tab { appearance: none; border: 0; background: transparent; cursor: pointer;
  font-family: var(--font-mono); font-size: var(--text-caption); letter-spacing: .04em;
  color: var(--text-secondary); padding: 8px 14px; border-radius: var(--radius-full);
  transition: color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out); white-space: nowrap; }
.kt-tab:hover { color: var(--text-primary); }
.kt-tab:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.kt-tabs--pill .kt-tab[data-active="true"] { background: var(--surface); color: var(--text-primary);
  box-shadow: var(--shadow-sm); }
.kt-tabs--underline .kt-tab { padding: 12px 0; border-radius: 0; position: relative; }
.kt-tabs--underline .kt-tab[data-active="true"] { color: var(--text-primary); }
.kt-tabs--underline .kt-tab[data-active="true"]::after { content: ''; position: absolute; left: 0; right: 0;
  bottom: -1px; height: 2px; background: var(--accent); border-radius: 2px; }
.kt-tab__count { margin-left: 6px; color: var(--text-muted); }
`;
let injected = false;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  const s = document.createElement('style');
  s.setAttribute('data-kt', 'tabs');
  s.textContent = CSS;
  document.head.appendChild(s);
  injected = true;
}

/** Tab strip. `items: [{ id, label, count? }]`, controlled by `value` / `onChange`. */
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  className = ''
}) {
  ensureCSS();
  return /*#__PURE__*/React.createElement("div", {
    className: ['kt-tabs', `kt-tabs--${variant}`, className].filter(Boolean).join(' '),
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    role: "tab",
    "aria-selected": value === it.id,
    "data-active": value === it.id,
    className: "kt-tab",
    onClick: () => onChange && onChange(it.id)
  }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "kt-tab__count"
  }, it.count))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutScreen.jsx
try { (() => {
/* ============================================================
   About — portrait, bio, timeline, contact.
   ============================================================ */

const TIMELINE = [{
  y: '2023–now',
  r: 'Independent',
  d: 'Freelance product design + a shelf of small AI apps.'
}, {
  y: '2019–2023',
  r: 'Staff Designer · Cartograph',
  d: 'Led the design system and the maps editor.'
}, {
  y: '2016–2019',
  r: 'Product Designer · Northbound',
  d: 'Mobile apps, end to end, zero to one.'
}, {
  y: '2015',
  r: 'BFA, Graphic Design',
  d: 'Where the photography habit started.'
}];
function ContactForm() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    style: {
      padding: 'var(--space-7)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--space-8) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--green-50)',
      color: 'var(--green-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22
    }
  }, "Got it. Talk soon."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      marginTop: 8
    }
  }, "I usually reply within a day.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Start a conversation"), /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Jordan Rivera"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "mail"
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "What's on your mind?",
    placeholder: "A project, a question, a coffee\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Send it")));
}
function AboutScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(40px,6vw,72px) var(--gutter) var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "About"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(34px,5vw,60px)',
      letterSpacing: '-0.03em',
      marginTop: 14,
      lineHeight: 1.02
    }
  }, "I'm Kevin, a product designer who never put the camera down", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pop)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-secondary)',
      lineHeight: 1.65,
      marginTop: 22,
      maxWidth: 540
    }
  }, "I care about the boring parts: the grid, the empty states, the second screen nobody designs. Then I try to leave one detail that makes you smile. Lately that means designing and building small apps with AI, and shooting whatever's in front of me."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 26,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "accent"
  }, "Product Design"), /*#__PURE__*/React.createElement(Tag, {
    variant: "accent"
  }, "Design Systems"), /*#__PURE__*/React.createElement(Tag, {
    variant: "pop"
  }, "Photography"), /*#__PURE__*/React.createElement(Tag, null, "AI prototyping"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    mood: "mono",
    ratio: "4/5",
    caption: "self, mirror \xB7 2025"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 'clamp(32px,5vw,72px)',
      marginTop: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Path"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, TIMELINE.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: 20,
      padding: '20px 0',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, t.y), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      fontFamily: 'var(--font-display)',
      letterSpacing: '-0.01em'
    }
  }, t.r), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 15,
      marginTop: 4
    }
  }, t.d)))))), /*#__PURE__*/React.createElement(ContactForm, null)));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AppsScreen.jsx
try { (() => {
/* ============================================================
   Apps — showcase of small apps designed & built with AI.
   ============================================================ */

const APPS = [{
  id: 'fieldnotes',
  name: 'Field Notes',
  mood: 'forest',
  tagline: 'Offline-first nature journal',
  desc: 'Snap, tag, and log plant sightings without signal. Syncs when you surface.',
  stack: ['SwiftUI', 'Claude', 'CoreData'],
  status: 'Live',
  featured: true
}, {
  id: 'palette',
  name: 'Palette Pull',
  mood: 'dusk',
  tagline: 'Colors from any photo',
  desc: 'Drop an image, get a usable token set: named, contrast-checked, copy-ready.',
  stack: ['React', 'Canvas'],
  status: 'Live'
}, {
  id: 'readingroom',
  name: 'Reading Room',
  mood: 'steel',
  tagline: 'A calmer RSS',
  desc: 'One column, no counts, no infinite scroll. Just today\u2019s good reads.',
  stack: ['Next', 'SQLite'],
  status: 'Live'
}, {
  id: 'metronome',
  name: 'Tempo',
  mood: 'cool',
  tagline: 'A metronome that listens',
  desc: 'Taps to your playing and nudges you back on time. Built in a weekend.',
  stack: ['Web Audio'],
  status: 'Beta'
}, {
  id: 'recipe',
  name: 'Mise',
  mood: 'sky',
  tagline: 'Recipes, de-cluttered',
  desc: 'Paste a link, get the recipe: ingredients and steps, nothing else.',
  stack: ['React', 'Claude'],
  status: 'Live'
}, {
  id: 'shelf',
  name: 'Shelf',
  mood: 'mono',
  tagline: 'What I\u2019m reading',
  desc: 'A tiny personal library that turns a bookshelf photo into a list.',
  stack: ['Vision', 'Claude'],
  status: 'Archived'
}];
function StatusBadge({
  status
}) {
  const map = {
    Live: ['success', true],
    Beta: ['warning', false],
    Archived: ['default', false]
  };
  const [v, dot] = map[status] || ['default', false];
  return /*#__PURE__*/React.createElement(Badge, {
    variant: v,
    dot: dot
  }, status);
}
function FeaturedApp({
  app
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 0,
      margin: 'calc(-1 * var(--space-5))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Featured app"), /*#__PURE__*/React.createElement(StatusBadge, {
    status: app.status
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(30px,3.6vw,46px)',
      letterSpacing: '-0.03em',
      marginTop: 16
    }
  }, app.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-secondary)',
      marginTop: 10,
      lineHeight: 1.55,
      maxWidth: 420
    }
  }, app.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 18,
      flexWrap: 'wrap'
    }
  }, app.stack.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    variant: "accent"
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-up-right"
    })
  }, "Open app"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Read the build"))), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 340,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    mood: app.mood,
    style: {
      position: 'absolute',
      inset: 0
    },
    caption: app.tagline
  }))));
}
function AppTile({
  app
}) {
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    mood: app.mood
  })), /*#__PURE__*/React.createElement(StatusBadge, {
    status: app.status
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 21,
      letterSpacing: '-0.02em',
      marginTop: 16
    }
  }, app.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, app.tagline), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14.5,
      lineHeight: 1.55,
      marginTop: 10
    }
  }, app.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      marginTop: 'auto',
      paddingTop: 16,
      flexWrap: 'wrap'
    }
  }, app.stack.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s
  }, s))));
}
function AppsScreen() {
  const featured = APPS.find(a => a.featured);
  const rest = APPS.filter(a => !a.featured);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(40px,6vw,72px) var(--gutter) var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Built with AI \xB7 Shipped solo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(34px,5vw,60px)',
      letterSpacing: '-0.03em',
      marginTop: 12,
      maxWidth: 720
    }
  }, "Small apps, made to test an idea", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pop)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-secondary)',
      marginTop: 18,
      maxWidth: 560,
      lineHeight: 1.6
    }
  }, "Designed and built end-to-end, often in a weekend, often with a model in the loop. Some are live, some are fossils. All taught me something."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(FeaturedApp, {
    app: featured
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-6)'
    }
  }, rest.map(a => /*#__PURE__*/React.createElement(AppTile, {
    key: a.id,
    app: a
  }))));
}
Object.assign(window, {
  AppsScreen,
  APPS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AppsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudyScreen.jsx
try { (() => {
/* ============================================================
   Case study — the "slides + photos" project page.
   ============================================================ */

const SLIDES = [{
  t: 'The problem',
  m: 'steel'
}, {
  t: 'Audit',
  m: 'mono'
}, {
  t: 'Direction',
  m: 'cool'
}, {
  t: 'System',
  m: 'sky'
}, {
  t: 'Outcome',
  m: 'forest'
}];
function MetaRow({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '.1em'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-primary)',
      fontWeight: 500,
      textAlign: 'right'
    }
  }, value));
}
function CaseStudyScreen({
  go
}) {
  const [slide, setSlide] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px var(--gutter) 0',
      maxWidth: 'var(--container-wide)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-secondary)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left"
  }), " back to work"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 'min(56vh, 460px)',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    mood: "sky",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(11,13,19,.55), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      padding: 'clamp(24px,4vw,48px)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "pop"
  }, "Brand \xB7 Slides"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 'clamp(36px,5.5vw,68px)',
      letterSpacing: '-0.03em',
      marginTop: 14,
      lineHeight: 1
    }
  }, "Atlas")))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 'clamp(32px,5vw,80px)',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Overview"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(20px,2.4vw,28px)',
      lineHeight: 1.45,
      letterSpacing: '-0.01em',
      marginTop: 16,
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-display)',
      fontWeight: 500
    }
  }, "A mapping startup had a great product and sixty slides that fought each other. I built one grammar: a grid, a type system, and a slide kit anyone on the team could use."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--text-secondary)',
      lineHeight: 1.65,
      marginTop: 22,
      maxWidth: 560
    }
  }, "We started by pulling every existing deck apart, then rebuilt from a single set of layouts: title, section, comparison, big-number, and a full-bleed photo frame. The result reads as one voice, even when five people are editing.")), /*#__PURE__*/React.createElement("aside", {
    style: {
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    label: "Role",
    value: "Design lead"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Year",
    value: "2025"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Team",
    value: "Solo + PM"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Tools",
    value: "Keynote, Figma"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Output",
    value: "60-slide kit"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-up-right"
    })
  }, "View the deck")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Slide system"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      aspectRatio: '16/9',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    mood: SLIDES[slide].m,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 'clamp(28px,4vw,56px)',
      background: 'linear-gradient(to top, rgba(11,13,19,.5), transparent 55%)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'rgba(255,255,255,.7)'
    }
  }, String(slide + 1).padStart(2, '0'), " / 05"), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      fontSize: 'clamp(28px,4vw,48px)',
      letterSpacing: '-0.02em',
      marginTop: 8
    }
  }, SLIDES[slide].t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 14
    }
  }, SLIDES.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setSlide(i),
    style: {
      flex: 1,
      border: 0,
      padding: 0,
      cursor: 'pointer',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      aspectRatio: '16/9',
      outline: i === slide ? '2px solid var(--accent)' : 'none',
      outlineOffset: 2,
      opacity: i === slide ? 1 : 0.65
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    mood: s.m
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 var(--gutter) var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "In context"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 'var(--space-4)',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    mood: "cool",
    ratio: "16/10",
    caption: "cover \xB7 title layout"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    mood: "dusk",
    ratio: "16/10",
    caption: "big-number"
  })))), /*#__PURE__*/React.createElement("section", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      background: 'var(--surface-inverse)',
      color: '#fff',
      padding: 'var(--space-11) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.5)'
    }
  }, "Next project"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 'clamp(30px,4vw,52px)',
      letterSpacing: '-0.03em',
      marginTop: 10
    }
  }, "Field Notes \u2192")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 40,
      height: 40
    }
  }))));
}
Object.assign(window, {
  CaseStudyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/GalleryScreen.jsx
try { (() => {
/* ============================================================
   Gallery — full-bleed immersive grid, filters, lightbox.
   ============================================================ */

const SHOTS = [{
  id: 1,
  m: 'cool',
  c: 'Reykjavík',
  cat: 'places',
  meta: 'ƒ/8 · 1/500s · 24mm'
}, {
  id: 2,
  m: 'mono',
  c: 'Kyoto, alley',
  cat: 'places',
  meta: 'ƒ/2 · 1/125s · 35mm'
}, {
  id: 3,
  m: 'dusk',
  c: 'Lisbon, dusk',
  cat: 'places',
  meta: 'ƒ/2.8 · 1/250s · 50mm'
}, {
  id: 4,
  m: 'steel',
  c: 'Studio, chair No.4',
  cat: 'studio',
  meta: 'ƒ/11 · 1/60s · 90mm'
}, {
  id: 5,
  m: 'forest',
  c: 'Big Sur',
  cat: 'places',
  meta: 'ƒ/16 · 1/30s · 16mm'
}, {
  id: 6,
  m: 'sky',
  c: 'Ada, portrait',
  cat: 'people',
  meta: 'ƒ/1.4 · 1/200s · 85mm'
}, {
  id: 7,
  m: 'mono',
  c: 'Hands, study',
  cat: 'people',
  meta: 'ƒ/4 · 1/160s · 50mm'
}, {
  id: 8,
  m: 'cool',
  c: 'Berlin, U-Bahn',
  cat: 'places',
  meta: 'ƒ/2.8 · 1/90s · 28mm'
}, {
  id: 9,
  m: 'steel',
  c: 'Object, No.12',
  cat: 'studio',
  meta: 'ƒ/8 · 1/125s · 100mm'
}, {
  id: 10,
  m: 'dusk',
  c: 'Marco, on set',
  cat: 'people',
  meta: 'ƒ/2 · 1/250s · 35mm'
}, {
  id: 11,
  m: 'forest',
  c: 'Trail, morning',
  cat: 'places',
  meta: 'ƒ/5.6 · 1/350s · 24mm'
}, {
  id: 12,
  m: 'sky',
  c: 'Window light',
  cat: 'studio',
  meta: 'ƒ/2.8 · 1/80s · 50mm'
}];
const FILTERS = [{
  id: 'all',
  label: 'All',
  count: 12
}, {
  id: 'places',
  label: 'Places'
}, {
  id: 'people',
  label: 'People'
}, {
  id: 'studio',
  label: 'Studio'
}];

/* a masonry-ish span pattern for variety */
const SPANS = {
  1: 'tall',
  3: 'wide',
  5: 'tall',
  6: 'wide',
  8: 'tall',
  11: 'wide'
};
function Lightbox({
  shot,
  onClose,
  onNav
}) {
  React.useEffect(() => {
    const h = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav(1);
      if (e.key === 'ArrowLeft') onNav(-1);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [shot]);
  if (!shot) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      background: 'rgba(11,13,19,.92)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 24px'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'rgba(255,255,255,.6)'
    }
  }, String(shot.id).padStart(2, '0'), " / 12"), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Close",
    variant: "ghost",
    onClick: onClose,
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      padding: '0 16px 16px'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Previous",
    variant: "outline",
    onClick: () => onNav(-1),
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,.3)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(74vw, 980px)',
      maxHeight: '78vh',
      aspectRatio: '3/2',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    mood: shot.m,
    caption: shot.c + '  ·  ' + shot.meta
  })), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Next",
    variant: "outline",
    onClick: () => onNav(1),
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,.3)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  }))));
}
function GalleryScreen() {
  const [filter, setFilter] = React.useState('all');
  const [openId, setOpenId] = React.useState(null);
  const list = SHOTS.filter(s => filter === 'all' || s.cat === filter);
  const open = SHOTS.find(s => s.id === openId);
  const nav = d => {
    const idx = list.findIndex(s => s.id === openId);
    const next = list[(idx + d + list.length) % list.length];
    if (next) setOpenId(next.id);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(40px,6vw,72px) var(--gutter) var(--space-7)',
      maxWidth: 'var(--container-wide)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Photography \xB7 2021/2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 20,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(34px,5vw,60px)',
      letterSpacing: '-0.03em',
      maxWidth: 640
    }
  }, "Frames I kept", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pop)'
    }
  }, ".")), /*#__PURE__*/React.createElement(Tabs, {
    value: filter,
    onChange: setFilter,
    items: FILTERS,
    variant: "pill"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--gutter) var(--space-12)',
      maxWidth: 'var(--container-wide)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridAutoRows: '200px',
      gap: 'var(--space-3)'
    }
  }, list.map(s => {
    const span = SPANS[s.id];
    const gs = filter === 'all' && span ? span === 'tall' ? {
      gridRow: 'span 2'
    } : {
      gridColumn: 'span 2'
    } : {};
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      onClick: () => setOpenId(s.id),
      style: {
        cursor: 'pointer',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        ...gs
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      mood: s.m,
      caption: s.c
    }));
  }))), /*#__PURE__*/React.createElement(Lightbox, {
    shot: open,
    onClose: () => setOpenId(null),
    onNav: nav
  }));
}
Object.assign(window, {
  GalleryScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/GalleryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
/* ============================================================
   Home — three switchable hero directions + selected work.
   ============================================================ */

const PROJECTS = [{
  id: 'fieldnotes',
  title: 'Field Notes',
  kind: 'Product Design',
  year: '2026',
  mood: 'forest',
  blurb: 'A weekend tool for logging plant observations. offline-first, fast capture.',
  tags: ['iOS', 'SwiftUI'],
  status: 'Shipped'
}, {
  id: 'ledger',
  title: 'Ledger',
  kind: 'Product Design',
  year: '2025',
  mood: 'steel',
  blurb: 'Personal finance that reads like a notebook, not a spreadsheet.',
  tags: ['Web', 'Design system'],
  status: 'Shipped'
}, {
  id: 'atlas',
  title: 'Atlas',
  kind: 'Brand · Slides',
  year: '2025',
  mood: 'sky',
  blurb: 'Pitch system for a mapping startup. 60 slides, one grammar.',
  tags: ['Keynote', 'Identity'],
  status: 'Case study'
}, {
  id: 'darkroom',
  title: 'Darkroom',
  kind: 'Photography',
  year: '2024',
  mood: 'dusk',
  blurb: 'A year of street photography, edited down to forty frames.',
  tags: ['Series'],
  status: 'Gallery'
}];
function HeroEditorial({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(56px,9vw,120px) var(--gutter) var(--space-11)',
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Kevin Tseng \xB7 Product Designer"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(40px,7vw,82px)',
      lineHeight: 1.0,
      letterSpacing: '-0.035em',
      marginTop: 22,
      maxWidth: 980
    }
  }, "I design slides, photographs,", /*#__PURE__*/React.createElement("br", null), "and small apps that try", /*#__PURE__*/React.createElement("br", null), "an idea quickly", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pop)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      color: 'var(--text-secondary)',
      maxWidth: 560,
      marginTop: 28,
      lineHeight: 1.55
    }
  }, "Ten years making products at the seam of craft and systems. Currently freelance, shipping a few AI experiments in the open."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('gallery')
  }, "See the work"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go('about'),
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-up-right"
    })
  }, "About me")));
}
function HeroFullBleed({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 'min(78vh, 680px)',
      margin: '0 var(--gutter)',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    mood: "dusk",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(11,13,19,.7) 0%, rgba(11,13,19,.1) 55%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 'clamp(28px,5vw,56px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.75)'
    }
  }, "Kevin Tseng \xB7 Selected 2021/2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 'clamp(36px,6vw,76px)',
      lineHeight: 1.0,
      letterSpacing: '-0.035em',
      marginTop: 18,
      maxWidth: 900
    }
  }, "Craft you can feel,", /*#__PURE__*/React.createElement("br", null), "systems you can trust", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pop)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('gallery')
  }, "Enter the gallery"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go('apps'),
    style: {
      background: 'rgba(255,255,255,.1)',
      color: '#fff',
      borderColor: 'rgba(255,255,255,.3)'
    }
  }, "AI apps"))));
}
function HeroSplit({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'clamp(24px,4vw,64px)',
      alignItems: 'center',
      padding: 'clamp(40px,6vw,88px) var(--gutter)',
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Product Designer \xB7 Freelance"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(36px,5vw,64px)',
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
      marginTop: 20
    }
  }, "Hi, I'm Kevin. I make", /*#__PURE__*/React.createElement("br", null), "considered things,", /*#__PURE__*/React.createElement("br", null), "sometimes playful", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pop)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-secondary)',
      marginTop: 22,
      lineHeight: 1.6,
      maxWidth: 440
    }
  }, "Slides, photographs, and a growing shelf of small AI apps. Here's a selected handful. not everything, just the good bits."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('apps')
  }, "Browse apps"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => go('about')
  }, "Say hello"))), /*#__PURE__*/React.createElement(Photo, {
    mood: "cool",
    ratio: "4/5",
    caption: "reykjav\xEDk \xB7 2024",
    index: "\u21B3 now",
    style: {
      borderRadius: 'var(--radius-2xl)'
    }
  }));
}
function HeroSwitcher({
  hero,
  setHero
}) {
  const opts = [['a', 'Editorial'], ['b', 'Full-bleed'], ['c', 'Split']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 18,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 60,
      display: 'flex',
      gap: 4,
      padding: 5,
      background: 'var(--surface)',
      borderRadius: 'var(--radius-full)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)',
      alignSelf: 'center',
      padding: '0 8px 0 10px'
    }
  }, "HERO"), opts.map(([k, label]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setHero(k),
    style: {
      border: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      padding: '7px 14px',
      borderRadius: 'var(--radius-full)',
      background: hero === k ? 'var(--accent)' : 'transparent',
      color: hero === k ? '#fff' : 'var(--text-secondary)'
    }
  }, label)));
}
function WorkGrid({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-11) var(--gutter)',
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Selected Work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(28px,3.5vw,42px)',
      letterSpacing: '-0.025em',
      marginTop: 10
    }
  }, "A handful of recent projects")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('apps'),
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right"
    })
  }, "All projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-6)'
    }
  }, PROJECTS.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    interactive: true,
    media: /*#__PURE__*/React.createElement(Photo, {
      mood: p.mood,
      index: String(i + 1).padStart(2, '0')
    }),
    onClick: () => go('case')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, p.kind, " \xB7 ", p.year), /*#__PURE__*/React.createElement(Badge, {
    variant: p.status === 'Shipped' ? 'success' : 'accent',
    dot: p.status === 'Shipped'
  }, p.status)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      letterSpacing: '-0.02em',
      marginTop: 4
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 15,
      lineHeight: 1.55
    }
  }, p.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 8
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))))));
}
function PhotoStrip({
  go
}) {
  const shots = [{
    m: 'cool',
    c: 'reykjavík'
  }, {
    m: 'mono',
    c: 'kyoto'
  }, {
    m: 'dusk',
    c: 'lisbon'
  }, {
    m: 'steel',
    c: 'berlin'
  }, {
    m: 'sky',
    c: 'big sur'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--gutter) var(--space-11)',
      maxWidth: 'var(--container-wide)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(24px,3vw,36px)',
      letterSpacing: '-0.02em'
    }
  }, "From the gallery"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('gallery'),
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right"
    })
  }, "Open gallery")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 'var(--space-3)'
    }
  }, shots.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => go('gallery'),
    style: {
      cursor: 'pointer',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    mood: s.m,
    ratio: "3/4",
    caption: s.c
  })))));
}
function HomeScreen({
  go,
  hero,
  setHero
}) {
  return /*#__PURE__*/React.createElement("div", null, hero === 'a' && /*#__PURE__*/React.createElement(HeroEditorial, {
    go: go
  }), hero === 'b' && /*#__PURE__*/React.createElement(HeroFullBleed, {
    go: go
  }), hero === 'c' && /*#__PURE__*/React.createElement(HeroSplit, {
    go: go
  }), /*#__PURE__*/React.createElement(WorkGrid, {
    go: go
  }), /*#__PURE__*/React.createElement(PhotoStrip, {
    go: go
  }), /*#__PURE__*/React.createElement(HeroSwitcher, {
    hero: hero,
    setHero: setHero
  }));
}
function WorkScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'clamp(20px,3vw,40px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Industrial Design \xB7 Selected"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(34px,5vw,60px)',
      letterSpacing: '-0.03em',
      marginTop: 12,
      maxWidth: 760
    }
  }, "Objects, products, and the systems around them", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pop)'
    }
  }, "."))), /*#__PURE__*/React.createElement(WorkGrid, {
    go: go
  }), /*#__PURE__*/React.createElement(PhotoStrip, {
    go: go
  }));
}
Object.assign(window, {
  HomeScreen,
  WorkScreen,
  WorkGrid,
  PhotoStrip,
  PROJECTS,
  HeroEditorial,
  HeroFullBleed,
  HeroSplit
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/SplashScreen.jsx
try { (() => {
/* ============================================================
   Splash — full-viewport landing, three expanding panels.
   No scroll. Click a panel to expand; click again to enter.
   ============================================================ */

const SLANT = 64; // px — diagonal seam offset between panels

const PANELS = [{
  id: 'industrial',
  n: '01',
  title: 'Industrial Design',
  tagline: 'From idea to market',
  desc: 'Objects and products designed end to end: form, material, and the details you only feel in the hand.',
  mood: 'steel',
  route: 'work',
  cta: 'See the work'
}, {
  id: 'apps',
  n: '02',
  title: 'Interactive Apps',
  tagline: 'Built with AI',
  desc: 'Small apps shipped solo, often in a weekend, with a model in the loop.',
  mood: 'cool',
  route: 'apps',
  cta: 'Browse apps'
}, {
  id: 'photography',
  n: '03',
  title: 'Photography',
  tagline: 'everyday observations',
  desc: 'Full-bleed frames, color and mono. A year edited down to the ones I kept.',
  mood: 'dusk',
  route: 'gallery',
  cta: 'Open gallery'
}];
function SplashPanel({
  p,
  state,
  onClick,
  onEnter,
  onHover,
  onLeave,
  slantLeft,
  slantRight,
  first
}) {
  // state: 'expanded' | 'peek' | 'half' | 'shrunk' | 'idle'
  const flex = state === 'expanded' ? 5.4 : state === 'peek' ? 1.7 : state === 'shrunk' ? 0.7 : state === 'half' ? 0.9 : 1;
  const isExp = state === 'expanded';
  const isPeek = state === 'peek';
  const raised = isExp || isPeek;
  const L = slantLeft ? SLANT : 0;
  const R = slantRight ? SLANT : 0;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: onHover,
    onMouseLeave: onLeave,
    style: {
      position: 'relative',
      flex: flex + ' 1 0',
      minWidth: 0,
      cursor: 'pointer',
      overflow: 'hidden',
      transition: 'flex-grow 620ms var(--ease-emphasis)',
      marginLeft: first ? 0 : -SLANT,
      zIndex: isExp ? 2 : isPeek ? 1 : 1,
      clipPath: `polygon(${L}px 0, 100% 0, calc(100% - ${R}px) 100%, 0 100%)`
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    mood: p.mood,
    style: {
      position: 'absolute',
      inset: 0,
      transition: 'transform 700ms var(--ease-out)',
      transform: raised ? 'scale(1.04)' : 'scale(1.12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: isExp ? 'linear-gradient(to top, rgba(11,13,19,.82) 0%, rgba(11,13,19,.25) 55%, rgba(11,13,19,.4) 100%)' : 'linear-gradient(to top, rgba(11,13,19,.7) 0%, rgba(11,13,19,.15) 60%, rgba(11,13,19,.35) 100%)',
      transition: 'background 500ms var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 24,
      left: 26 + L,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '.14em',
      color: 'rgba(255,255,255,.7)'
    }
  }, p.n), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 22,
      right: 24,
      color: '#fff',
      opacity: isExp ? 0 : 0.85,
      transition: 'opacity 300ms',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 'clamp(22px,3vw,44px)',
      opacity: state === 'half' ? 0.3 : 1,
      transition: 'opacity 320ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.72)',
      marginBottom: 12,
      whiteSpace: 'nowrap'
    }
  }, p.tagline), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: isExp ? 'clamp(40px,5vw,72px)' : isPeek ? 'clamp(30px,3vw,52px)' : 'clamp(26px,2.4vw,40px)',
      lineHeight: 1.0,
      letterSpacing: '-0.03em',
      transition: 'font-size 500ms var(--ease-out)',
      maxWidth: isExp ? 620 : isPeek ? 420 : 280
    }
  }, p.title, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pop)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: isExp ? 200 : 0,
      opacity: isExp ? 1 : 0,
      overflow: 'hidden',
      transition: 'max-height 500ms var(--ease-out), opacity 400ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.82)',
      fontSize: 17,
      lineHeight: 1.55,
      marginTop: 16,
      maxWidth: 460
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: e => {
      e.stopPropagation();
      onEnter();
    },
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right"
    })
  }, p.cta)))));
}
function SplashScreen({
  go,
  topOffset = 67
}) {
  const [open, setOpen] = React.useState(null);
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: `calc(100dvh - ${topOffset}px)`,
      display: 'flex',
      overflow: 'hidden',
      background: 'var(--slate-950)'
    }
  }, PANELS.map((p, i) => {
    const state = open != null ? open === p.id ? 'expanded' : 'shrunk' : hover != null ? hover === p.id ? 'peek' : 'half' : 'idle';
    return /*#__PURE__*/React.createElement(SplashPanel, {
      key: p.id,
      p: p,
      state: state,
      first: i === 0,
      slantLeft: i !== 0,
      slantRight: i !== PANELS.length - 1,
      onClick: () => setOpen(open === p.id ? null : p.id),
      onHover: () => setHover(p.id),
      onLeave: () => setHover(null),
      onEnter: () => go(p.route)
    });
  }));
}
Object.assign(window, {
  SplashScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/SplashScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/shared.jsx
try { (() => {
/* ============================================================
   Portfolio UI kit — shared layer
   Photo placeholder, TopNav, Footer, small atoms.
   Exported to window for the screen scripts.
   ============================================================ */

const NS = window.KevinTsengDesignSystem_087052;
const {
  Button,
  IconButton,
  Tag,
  Badge
} = NS;

/* Film-grain noise as a data-uri overlay (texture, not imagery) */
const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";
const MOODS = {
  cool: 'linear-gradient(150deg, #1B2C6B 0%, #2A4DFF 55%, #5A74FF 100%)',
  dusk: 'linear-gradient(150deg, #2C2350 0%, #5B3B8A 45%, #FF6B45 120%)',
  mono: 'linear-gradient(150deg, #20242E 0%, #3A4150 60%, #6B7280 100%)',
  forest: 'linear-gradient(150deg, #11261C 0%, #16A36A 90%, #9BE3C2 130%)',
  steel: 'linear-gradient(150deg, #11151D 0%, #2C313D 60%, #828A99 120%)',
  sky: 'linear-gradient(150deg, #0E2A4D 0%, #2E6FB8 55%, #93C5E8 120%)'
};

/* Photographic placeholder — immersive, full-bleed, intentional.
   Swap for a real <img> in production. */
function Photo({
  mood = 'cool',
  caption,
  index,
  ratio,
  className = '',
  style = {},
  children
}) {
  const bg = MOODS[mood] || MOODS.cool;
  return /*#__PURE__*/React.createElement("div", {
    className: 'kt-photo ' + className,
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: bg,
      aspectRatio: ratio || undefined,
      height: ratio ? undefined : '100%',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: GRAIN,
      backgroundSize: '180px',
      mixBlendMode: 'overlay',
      opacity: 0.28,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 100% at 30% 0%, rgba(255,255,255,.14), transparent 60%)',
      pointerEvents: 'none'
    }
  }), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      color: 'rgba(255,255,255,.85)'
    }
  }, index), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      bottom: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.04em',
      color: 'rgba(255,255,255,.92)',
      background: 'rgba(11,13,19,.34)',
      backdropFilter: 'blur(6px)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)'
    }
  }, caption), children);
}

/* Wordmark */
function Wordmark({
  inverse = false,
  size = 22
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size,
      letterSpacing: '-0.04em',
      color: inverse ? '#fff' : 'var(--text-primary)',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      alignItems: 'baseline'
    }
  }, "kevin tseng", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pop)'
    }
  }, "."));
}
const NAV = [{
  id: 'work',
  label: 'work'
}, {
  id: 'apps',
  label: 'apps'
}, {
  id: 'gallery',
  label: 'photos'
}, {
  id: 'about',
  label: 'about'
}];
function TopNav({
  route,
  go,
  inverse = false,
  overlay = false,
  showAvailable = true
}) {
  const [hover, setHover] = React.useState(null);
  const dark = inverse || overlay;
  const fg = dark ? '#fff' : 'var(--text-primary)';
  const muted = dark ? 'rgba(255,255,255,.62)' : 'var(--text-secondary)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: overlay ? 'fixed' : 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px var(--gutter)',
      backdropFilter: 'blur(12px)',
      background: overlay ? 'rgba(11,13,19,.25)' : inverse ? 'rgba(11,13,19,.28)' : 'rgba(247,248,250,.78)',
      borderBottom: overlay ? '1px solid rgba(255,255,255,.12)' : inverse ? '1px solid rgba(255,255,255,.12)' : '1px solid var(--border-faint)',
      transition: 'background 200ms var(--ease-out), border-color 200ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    inverse: dark
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)'
    }
  }, NAV.map(n => {
    const active = route === n.id;
    const hovered = hover === n.id;
    const hoverColor = dark ? '#fff' : 'var(--text-primary)';
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => go(n.id),
      onMouseEnter: () => setHover(n.id),
      onMouseLeave: () => setHover(null),
      style: {
        background: 'none',
        border: 0,
        cursor: 'pointer',
        padding: '4px 0',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        letterSpacing: '.02em',
        color: active || hovered ? hoverColor : muted,
        borderBottom: active ? '2px solid var(--pop)' : '2px solid transparent',
        transition: 'color 160ms var(--ease-out)'
      }
    }, n.label);
  }), showAvailable && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: muted
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--green-500)'
    }
  }), "available")));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: '#fff',
      padding: 'var(--space-12) var(--gutter) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    inverse: true,
    size: 30
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.6)',
      fontSize: 15,
      marginTop: 14,
      lineHeight: 1.6
    }
  }, "Product designer working at the seam of craft and systems. Slides, photographs, and small apps made to test an idea.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-11)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(FooterCol, {
    title: "Site",
    items: ['Work', 'Photos', 'Apps', 'About']
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Elsewhere",
    items: ['Are.na', 'Instagram', 'Read.cv', 'Email']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      marginTop: 'var(--space-10)',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid rgba(255,255,255,.12)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'rgba(255,255,255,.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \xB7 made between projects"), /*#__PURE__*/React.createElement("span", null, "designed in the open")));
}
function FooterCol({
  title,
  items
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.4)',
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'rgba(255,255,255,.8)',
      fontSize: 14
    }
  }, i)))));
}

/* mono eyebrow */
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      ...style
    }
  }, children);
}

// expose shared atoms AND the design-system primitives so every
// screen script (separate Babel scope) can reach them by name.
Object.assign(window, {
  Photo,
  Wordmark,
  TopNav,
  Footer,
  Eyebrow,
  MOODS,
  Button: NS.Button,
  IconButton: NS.IconButton,
  Tag: NS.Tag,
  Badge: NS.Badge,
  Card: NS.Card,
  Tabs: NS.Tabs,
  Input: NS.Input,
  Switch: NS.Switch
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
