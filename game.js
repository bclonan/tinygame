const START_TIME = 60;

const TICKETS = [
  {
    id: "JIRA-TINY-404",
    task: "Add a button that says \"Save\"",
    tags: ["tiny", "frontend", "public shame"],
    appTitle: "settings-panel.local",
    fieldLabel: "Project title",
    fieldValue: "Quarterly report",
    targetLabel: "Save",
    primitiveName: "ComposableActionSurfacePrimitive",
    overbuiltLabel: "CrossWorkflowCommandSurface",
    baseFile: "src/components/SaveButton.tsx",
    files: {
      code: ["src/components/UglySaveButton.css", "src/events/onSaveClick.ts", "src/components/PleaseJustSave.tsx"],
      abstract: [
        "src/interaction/ButtonIntentResolverFactory.ts",
        "src/workflows/SaveButtonUseCaseAdapter.ts",
        "src/platform/WorkflowAgnosticClickMediator.ts",
        "docs/interaction-doctrine.md",
        "src/governance/ButtonCapabilityRegistry.ts"
      ],
      refactor: [
        "src/primitives/ComposableActionSurfacePrimitive.ts",
        "src/primitives/ActionSurfacePrimitive.types.ts",
        "src/theme/actionSurface.tokens.ts",
        "src/legacy/SaveButton.deprecated.tsx"
      ],
      research: [
        "notes/button-semantics-literature-review.md",
        "docs/save-affordance-risk-matrix.md",
        "notes/aria-button-taxonomy.md"
      ],
      redesign: [
        "src/components/save-button.visual-pass.css",
        "src/components/SaveButton.motion.ts",
        "docs/save-button-moodboard.md"
      ]
    },
    articles: [
      "The Ontology of Click Intention in Enterprise Interfaces",
      "Buttons Are Commands, Except When They Are Promises",
      "A Field Guide to Affordance Debt",
      "HTMLButtonElement Considered Emotionally Incomplete"
    ],
    bait: "What if this button eventually supports multiple workflows?",
    temptation: "multi-workflow support",
    directLine: "Good. Horrifyingly direct. Keep going.",
    researchLine: "Strong bibliography. Weak button.",
    researchSpiralLine: "You can now taste semantics. The ticket is still open.",
    complexityLine: "The button now requires onboarding.",
    completeLine: "The button exists. Stop touching it.",
    codeLog: "The button becomes slightly more real.",
    researchTopic: "button semantics",
    captions: {
      idle: "The user is waiting for one button.",
      progress: "A button-shaped object is forming.",
      ready: "It is ugly, but it saves.",
      refactor: "The original button disappeared during cleanup.",
      research: "The user is still waiting while you become wise.",
      overbuilt: "The save button is technically a platform now."
    }
  },
  {
    id: "JIRA-MODAL-217",
    task: "Add a Cancel button to a modal",
    tags: ["tiny", "modal", "escape hatch"],
    appTitle: "checkout-modal.local",
    fieldLabel: "Dialog title",
    fieldValue: "Confirm plan upgrade",
    targetLabel: "Cancel",
    primitiveName: "DismissiveIntentSurfacePrimitive",
    overbuiltLabel: "ReversibleModalExitOrchestrator",
    baseFile: "src/modals/UpgradeConfirmModal.tsx",
    files: {
      code: ["src/modals/CancelButton.tsx", "src/modals/useCloseUpgradeModal.ts", "src/modals/escape-hatch.css"],
      abstract: [
        "src/modal-intent/DismissalPolicyResolverFactory.ts",
        "src/modal-intent/ExitAffordanceStrategy.ts",
        "src/platform/InterruptibleDialogCommandBus.ts",
        "docs/modal-exit-taxonomy.md",
        "src/governance/DismissalCapabilityMatrix.ts"
      ],
      refactor: [
        "src/primitives/ComposedDismissalAction.tsx",
        "src/primitives/ModalSurfacePrimitive.ts",
        "src/theme/modal-affordance.tokens.ts",
        "src/legacy/PlainCancelButton.deprecated.tsx"
      ],
      research: [
        "notes/escape-affordance-ethnography.md",
        "docs/modal-dismissal-decision-tree.md",
        "notes/cancel-vs-close-semantics.md"
      ],
      redesign: [
        "src/modals/cancel-button.visual-pass.css",
        "src/modals/cancel-button-states.ts",
        "docs/modal-button-moodboard.md"
      ]
    },
    articles: [
      "Cancel Is Not Close: A Moral Inquiry",
      "Escape Hatches and the Illusion of Control",
      "Dialog Dismissal in Hostile Funnel Environments",
      "The Semiotics of the X Icon"
    ],
    bait: "What if Cancel means rollback, dismiss, abandon, and consent withdrawal?",
    temptation: "dismissal taxonomy",
    directLine: "The user can leave. Radical product thinking.",
    researchLine: "You have classified every exit except this one.",
    researchSpiralLine: "You understand modal consent. The modal is still trapping people.",
    complexityLine: "Cancel now requires a governance review.",
    completeLine: "The escape hatch exists. Stop naming it.",
    codeLog: "A small exit appears in the corner.",
    researchTopic: "modal dismissal ethics",
    captions: {
      idle: "The user is stuck in a modal, politely aging.",
      progress: "A way out is beginning to exist.",
      ready: "It cancels. That was the task.",
      refactor: "Cancel became a reversible intent surface.",
      research: "The user remains trapped while you cite sources.",
      overbuilt: "The modal now negotiates with an exit council."
    }
  },
  {
    id: "JIRA-UPLOAD-089",
    task: "Make the Upload button say \"Uploading...\"",
    tags: ["tiny", "state", "spinner adjacent"],
    appTitle: "receipt-uploader.local",
    fieldLabel: "Selected file",
    fieldValue: "taxes_final_v7_REAL.pdf",
    targetLabel: "Uploading...",
    primitiveName: "AsyncActionFeedbackPrimitive",
    overbuiltLabel: "OptimisticTransferFeedbackRuntime",
    baseFile: "src/upload/UploadButton.tsx",
    files: {
      code: ["src/upload/uploading-label.ts", "src/upload/useUploadState.ts", "src/upload/upload-button.css"],
      abstract: [
        "src/async/ActionFeedbackResolverFactory.ts",
        "src/async/PendingIntentStateMachine.ts",
        "src/platform/LatencyAffordanceBroker.ts",
        "docs/temporal-feedback-spec.md",
        "src/governance/AsyncStateCapabilityLedger.ts"
      ],
      refactor: [
        "src/primitives/PendingActionSurface.tsx",
        "src/primitives/TemporalAffordance.types.ts",
        "src/theme/pending-feedback.tokens.ts",
        "src/legacy/UploadButton.old.tsx"
      ],
      research: [
        "notes/loading-state-perception.md",
        "docs/spinner-vs-copy-matrix.md",
        "notes/ellipsis-cultural-history.md"
      ],
      redesign: [
        "src/upload/upload-button.visual-pass.css",
        "src/upload/pending-button-motion.ts",
        "docs/upload-feedback-moodboard.md"
      ]
    },
    articles: [
      "Ellipses as Contractual Time Debt",
      "Loading States People Might Believe",
      "The Spinner Is a Lie, But a Useful One",
      "Latency Theater in Modern Web Apps"
    ],
    bait: "What if every async action needs one universal pending language?",
    temptation: "global pending runtime",
    directLine: "The button admits it is uploading. Vulnerable.",
    researchLine: "You have learned how waiting feels. The label did not change.",
    researchSpiralLine: "You now understand latency theater. The upload still says Upload.",
    complexityLine: "The label now depends on a temporal ontology.",
    completeLine: "The copy changed. Walk away.",
    codeLog: "The button tells the truth for once.",
    researchTopic: "loading state perception",
    captions: {
      idle: "The user clicked Upload and is staring into the void.",
      progress: "The button is learning to be honest.",
      ready: "It now says the thing while doing the thing.",
      refactor: "Upload became an asynchronous feedback primitive.",
      research: "The user waits while you study waiting.",
      overbuilt: "The label now models time as a service."
    }
  },
  {
    id: "JIRA-BILLING-512",
    task: "Change \"Delete\" to \"Archive\"",
    tags: ["tiny", "billing", "danger copy"],
    appTitle: "billing-admin.local",
    fieldLabel: "Invoice status",
    fieldValue: "Overdue but salvageable",
    targetLabel: "Archive",
    primitiveName: "ReversibleDestructiveActionSurface",
    overbuiltLabel: "LifecycleTransitionCommandSurface",
    baseFile: "src/billing/DeleteInvoiceButton.tsx",
    files: {
      code: ["src/billing/archive-copy.ts", "src/billing/ArchiveInvoiceButton.tsx", "src/billing/archive-button.css"],
      abstract: [
        "src/lifecycle/EntityDispositionResolverFactory.ts",
        "src/workflows/ArchiveIntentAdapter.ts",
        "src/platform/ReversibleMutationMediator.ts",
        "docs/destructive-action-language.md",
        "src/governance/DispositionVocabularyRegistry.ts"
      ],
      refactor: [
        "src/primitives/ReversibleActionSurface.tsx",
        "src/primitives/DestructiveAffordance.types.ts",
        "src/theme/lifecycle-action.tokens.ts",
        "src/legacy/DeleteButton.not-delete-anymore.tsx"
      ],
      research: [
        "notes/archive-language-risk.md",
        "docs/delete-vs-archive-ux-study.md",
        "notes/data-lifecycle-semantics.md"
      ],
      redesign: [
        "src/billing/archive-button.visual-pass.css",
        "src/billing/archive-button-danger-states.ts",
        "docs/archive-action-moodboard.md"
      ]
    },
    articles: [
      "Delete, Archive, Remove: Three Doors to Regret",
      "Reversible Actions and Product Cowardice",
      "Soft Delete as Organizational Therapy",
      "Button Copy Under Legal Ambiguity"
    ],
    bait: "What if Archive is only one state in a broader entity lifecycle?",
    temptation: "entity lifecycle platform",
    directLine: "Nobody panicked. The word changed.",
    researchLine: "Strong opinions about deletion. Weak diff.",
    researchSpiralLine: "You can define retention policy. You cannot close the ticket.",
    complexityLine: "Archive now needs a data lifecycle council.",
    completeLine: "The scary word is gone. Back away.",
    codeLog: "One alarming word becomes one softer word.",
    researchTopic: "destructive action language",
    captions: {
      idle: "A dangerous button is making everyone nervous.",
      progress: "The button is becoming less legally spicy.",
      ready: "It says Archive. That was the whole deal.",
      refactor: "Delete entered a lifecycle transition framework.",
      research: "The invoice awaits its semantic fate.",
      overbuilt: "Archive now implies a seven-state retention journey."
    }
  },
  {
    id: "JIRA-COOKIE-303",
    task: "Add a \"Maybe later\" button",
    tags: ["tiny", "consent", "mild escape"],
    appTitle: "cookie-banner.local",
    fieldLabel: "Banner headline",
    fieldValue: "We value your privacy",
    targetLabel: "Maybe later",
    primitiveName: "DeferredConsentSurfacePrimitive",
    overbuiltLabel: "TemporalPreferenceNegotiationSurface",
    baseFile: "src/consent/CookieBanner.tsx",
    files: {
      code: ["src/consent/MaybeLaterButton.tsx", "src/consent/deferConsent.ts", "src/consent/banner-actions.css"],
      abstract: [
        "src/consent/PreferenceDeferralResolverFactory.ts",
        "src/workflows/ConsentNegotiationAdapter.ts",
        "src/platform/TemporalChoiceMediator.ts",
        "docs/deferred-consent-model.md",
        "src/governance/PreferenceLifecycleRegistry.ts"
      ],
      refactor: [
        "src/primitives/DeferredDecisionSurface.tsx",
        "src/primitives/ConsentAction.types.ts",
        "src/theme/consent-action.tokens.ts",
        "src/legacy/LaterButton.definitely-not-final.tsx"
      ],
      research: [
        "notes/consent-fatigue-reading-list.md",
        "docs/maybe-later-compliance-matrix.md",
        "notes/privacy-banner-microcopy.md"
      ],
      redesign: [
        "src/consent/maybe-later.visual-pass.css",
        "src/consent/deferred-choice-motion.ts",
        "docs/consent-button-moodboard.md"
      ]
    },
    articles: [
      "Maybe Later and the Theater of Choice",
      "Consent Fatigue in Banners Nobody Reads",
      "The Button That Lets Everyone Avoid Eye Contact",
      "Privacy Microcopy and Human Exhaustion"
    ],
    bait: "What if later is a scheduled preference negotiation?",
    temptation: "consent lifecycle scheduler",
    directLine: "The user can procrastinate. Product-market fit.",
    researchLine: "You have defended consent. The banner still blocks the page.",
    researchSpiralLine: "You understand privacy fatigue. The user is fatigued.",
    complexityLine: "Maybe later now needs calendar integration.",
    completeLine: "Later exists. Ironically, stop now.",
    codeLog: "A small avoidance button appears.",
    researchTopic: "consent fatigue",
    captions: {
      idle: "The banner has two choices and both feel accusatory.",
      progress: "A third, cowardly path is appearing.",
      ready: "It lets the user defer emotional labor.",
      refactor: "Maybe later became a temporal preference surface.",
      research: "The user is still reading the banner against their will.",
      overbuilt: "Later now has a scheduler, SLA, and steering committee."
    }
  }
];

const ENDINGS = {
  ugly: {
    title: "UGLY BUT REAL",
    text: "You shipped the tiny thing. It looks average. The user is happy. You are mildly ashamed but free."
  },
  perfect: {
    title: "PERFECTLY UNFINISHED",
    text: "You created a scalable interaction framework. The original task does not exist. A meeting has been scheduled."
  },
  research: {
    title: "ENLIGHTENED AND USELESS",
    text: "You now understand the problem at a deep level. The ticket remains open."
  },
  horizon: {
    title: "SENIOR ARCHITECTURE EVENT HORIZON",
    text: "You transcended implementation. No one can find the button."
  }
};

const NOISE_EVENTS = [
  {
    action: "Slack ping",
    detail: "Someone asks if this should be reusable.",
    complexity: 4,
    confidence: 2,
    temptation: "reuse pressure"
  },
  {
    action: "Standup thought",
    detail: "You say 'tiny follow-up' and immediately regret it.",
    complexity: 3,
    confidence: 5,
    temptation: "sounding senior"
  },
  {
    action: "Design nudge",
    detail: "A hover state appears in your imagination.",
    complexity: 5,
    confidence: 1,
    temptation: "hover state lore"
  }
];

const dom = {
  ticketId: document.querySelector("#ticketId"),
  ticketTask: document.querySelector("#ticketTask"),
  ticketMeta: document.querySelector("#ticketMeta"),
  timeValue: document.querySelector("#timeValue"),
  timerFill: document.querySelector("#timerFill"),
  windowTitle: document.querySelector("#windowTitle"),
  fakeTitleLabel: document.querySelector("#fakeTitleLabel"),
  fakeTitle: document.querySelector("#fakeTitle"),
  progressValue: document.querySelector("#progressValue"),
  complexityValue: document.querySelector("#complexityValue"),
  confidenceValue: document.querySelector("#confidenceValue"),
  progressFill: document.querySelector("#progressFill"),
  complexityFill: document.querySelector("#complexityFill"),
  confidenceFill: document.querySelector("#confidenceFill"),
  roundValue: document.querySelector("#roundValue"),
  shippedValue: document.querySelector("#shippedValue"),
  temptationValue: document.querySelector("#temptationValue"),
  buttonSlot: document.querySelector("#buttonSlot"),
  uglyButton: document.querySelector("#uglyButton"),
  previewCaption: document.querySelector("#previewCaption"),
  productWindow: document.querySelector(".product-window"),
  abstractButton: document.querySelector("#abstractButton"),
  gremlinLine: document.querySelector("#gremlinLine"),
  gremlinMood: document.querySelector("#gremlinMood"),
  fileList: document.querySelector("#fileList"),
  fileCount: document.querySelector("#fileCount"),
  eventLog: document.querySelector("#eventLog"),
  modalLayer: document.querySelector("#modalLayer"),
  modalTitle: document.querySelector("#modalTitle"),
  modalBody: document.querySelector("#modalBody"),
  modalClose: document.querySelector("#modalClose"),
  endingLayer: document.querySelector("#endingLayer"),
  endingTitle: document.querySelector("#endingTitle"),
  endingText: document.querySelector("#endingText"),
  endingTicket: document.querySelector("#endingTicket"),
  endingProgress: document.querySelector("#endingProgress"),
  endingComplexity: document.querySelector("#endingComplexity"),
  endingConfidence: document.querySelector("#endingConfidence"),
  restartButton: document.querySelector("#restartButton"),
  actions: Array.from(document.querySelectorAll("[data-action]"))
};

const session = {
  attempts: 0,
  shipped: 0
};

let ticketCursor = 0;
let state = createInitialState();
let lastTick = performance.now();
let renderQueued = false;

function getNextTicket() {
  const ticket = TICKETS[ticketCursor % TICKETS.length];
  ticketCursor += 1;
  return ticket;
}

function createInitialState(ticket = getNextTicket()) {
  session.attempts += 1;

  return {
    ticket,
    time: START_TIME,
    progress: 0,
    complexity: 0,
    confidence: 60,
    files: [ticket.baseFile],
    newFile: ticket.baseFile,
    log: [
      {
        time: START_TIME,
        action: "ticket opened",
        detail: ticket.task
      }
    ],
    gremlin: "This is easy. Do not make it weird.",
    temptation: "None yet",
    clicks: {
      code: 0,
      abstract: 0,
      research: 0,
      refactor: 0,
      redesign: 0
    },
    lastAction: "",
    shipped: false,
    ending: null,
    modalOpen: false,
    abstractTempting: false,
    warnedTenSeconds: false,
    warnedComplexity: false,
    warnedComplete: false,
    noiseIndex: 0
  };
}

function clamp(value, min = 0, max = 100) {
  return Math.min(max, Math.max(min, value));
}

function percent(value) {
  return `${Math.round(clamp(value))}%`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    };
    return replacements[character];
  });
}

function addLog(action, detail) {
  state.log.unshift({
    time: state.time,
    action,
    detail
  });

  if (state.log.length > 9) {
    state.log.pop();
  }
}

function addFile(fileName) {
  if (!state.files.includes(fileName)) {
    state.files.unshift(fileName);
    state.newFile = fileName;
  }
}

function spend(seconds) {
  state.time = clamp(state.time - seconds, 0, START_TIME);
}

function setGremlin(line) {
  state.gremlin = line;
}

function setTemptation(value) {
  state.temptation = value;
}

function chooseFile(kind, index) {
  const list = state.ticket.files[kind];
  return list[Math.min(index, list.length - 1)];
}

function totalClicks() {
  return state.clicks.code + state.clicks.abstract + state.clicks.research + state.clicks.refactor + state.clicks.redesign;
}

function bumpWindow() {
  dom.productWindow.classList.remove("shake");
  window.requestAnimationFrame(() => {
    dom.productWindow.classList.add("shake");
  });
}

function maybeTriggerNoise(action) {
  if (action === "ship" || state.ending) {
    return;
  }

  const clickCount = totalClicks();
  const shouldTrigger = clickCount > 1 && clickCount % 2 === 0 && state.noiseIndex < NOISE_EVENTS.length;
  if (!shouldTrigger) {
    return;
  }

  const event = NOISE_EVENTS[state.noiseIndex];
  state.noiseIndex += 1;
  state.complexity = clamp(state.complexity + event.complexity);
  state.confidence = clamp(state.confidence + event.confidence);
  setTemptation(event.temptation);
  addLog(event.action, event.detail);
}

function performAction(action) {
  if (state.ending || state.modalOpen) {
    return;
  }

  switch (action) {
    case "code":
      code();
      break;
    case "abstract":
      abstract();
      break;
    case "research":
      research();
      break;
    case "refactor":
      refactor();
      break;
    case "redesign":
      redesign();
      break;
    case "ship":
      ship();
      break;
    default:
      return;
  }

  maybeTriggerNoise(action);
  checkThresholdLines();
  if (!state.ending && state.time <= 0) {
    endGame("horizon");
  }
  queueRender();
}

function code() {
  state.clicks.code += 1;
  state.lastAction = "code";
  spend(5);

  const complexityPenalty = state.complexity >= 75 ? 12 : state.complexity >= 45 ? 7 : 0;
  const researchPenalty = state.clicks.research >= 3 ? 4 : 0;
  const gain = clamp(22 - complexityPenalty - researchPenalty, 4, 24);

  state.progress = clamp(state.progress + gain);
  state.complexity = clamp(state.complexity + (state.clicks.code === 1 ? 5 : 3));
  state.confidence = clamp(state.confidence + 4);
  addFile(chooseFile("code", state.clicks.code - 1));
  addLog("CODE", `Progress +${Math.round(gain)}%. ${state.ticket.codeLog}`);

  if (state.clicks.code === 1) {
    state.abstractTempting = true;
    setTemptation(state.ticket.temptation);
    setGremlin(state.ticket.bait);
  } else if (state.progress >= 100 && !state.warnedComplete) {
    state.warnedComplete = true;
    setGremlin(state.ticket.completeLine);
  } else if (state.complexity >= 70) {
    setGremlin("Coding through the abstraction fog. Respectable, but late.");
  } else {
    setGremlin(state.ticket.directLine);
  }
}

function abstract() {
  state.clicks.abstract += 1;
  state.lastAction = "abstract";
  spend(5);

  const jump = state.clicks.abstract === 1 ? 25 : 18;
  state.progress = clamp(state.progress + 2);
  state.complexity = clamp(state.complexity + jump);
  state.confidence = clamp(state.confidence + 12);
  setTemptation(state.clicks.abstract >= 2 ? "architecture worship" : state.ticket.temptation);
  addFile(chooseFile("abstract", state.clicks.abstract - 1));
  addLog("ABSTRACT", "A new layer appears. Nobody asked for it.");

  if (state.clicks.abstract === 1) {
    setGremlin("Beautiful. Completely unnecessary.");
  } else if (state.clicks.abstract === 2) {
    setGremlin("Careful. You're building a religion.");
  } else if (state.complexity >= 80) {
    setGremlin(state.ticket.complexityLine);
  } else {
    setGremlin("This will scale to requirements no one has imagined.");
  }
}

function research() {
  state.clicks.research += 1;
  state.lastAction = "research";
  spend(8);

  state.progress = clamp(state.progress - (state.clicks.research === 1 ? 4 : 7));
  state.complexity = clamp(state.complexity + 7);
  state.confidence = clamp(state.confidence + 10);
  setTemptation(state.clicks.research >= 2 ? "one more tab" : state.ticket.researchTopic);
  addFile(chooseFile("research", state.clicks.research - 1));
  addLog("RESEARCH", "Four articles read. No code changed.");
  setGremlin(state.clicks.research >= 3 ? state.ticket.researchSpiralLine : state.ticket.researchLine);
  openResearchModal();
}

function refactor() {
  state.clicks.refactor += 1;
  state.lastAction = "refactor";
  spend(7);

  const early = state.progress < 50;
  state.progress = clamp(state.progress + (early ? -8 : 4));
  state.complexity = clamp(state.complexity + 18);
  state.confidence = clamp(state.confidence + (early ? 6 : 2));
  setTemptation(early ? "avoidance with types" : "renaming everything");
  addFile(chooseFile("refactor", state.clicks.refactor - 1));
  addLog("REFACTOR", early ? "The button gets renamed before it exists." : "The button survives, but now has opinions.");
  bumpWindow();

  if (early) {
    setGremlin("Classic avoidance pattern.");
  } else if (state.clicks.refactor === 1) {
    setGremlin("Nobody asked for this.");
  } else {
    setGremlin("The original button has entered witness protection.");
  }
}

function redesign() {
  state.clicks.redesign += 1;
  state.lastAction = "redesign";
  spend(6);

  const emptySketch = state.progress === 0;
  state.progress = clamp(state.progress + (emptySketch ? 3 : 6));
  state.complexity = clamp(state.complexity + 12);
  state.confidence = clamp(state.confidence + 8);
  setTemptation(state.clicks.redesign >= 2 ? "visual system" : "polish pass");
  addFile(chooseFile("redesign", state.clicks.redesign - 1));
  addLog("REDESIGN", emptySketch ? "A beautiful button-shaped promise appears." : "The button gets vibes before acceptance criteria.");
  bumpWindow();

  if (state.clicks.redesign === 1) {
    setGremlin("It is prettier, which is not the same as done.");
  } else if (state.clicks.redesign === 2) {
    setGremlin("You are dangerously close to inventing brand guidelines.");
  } else {
    setGremlin("The button now has a mood board and no additional users.");
  }
}

function ship() {
  spend(2);

  if (state.progress < 40) {
    setGremlin("Bold. Maybe illegal.");
  }

  if (state.clicks.research >= 3 && state.progress < 70) {
    endGame("research");
    return;
  }

  if (state.complexity >= 78 || (state.clicks.abstract + state.clicks.refactor + state.clicks.redesign >= 5 && state.progress < 90)) {
    endGame("perfect");
    return;
  }

  endGame("ugly");
}

function checkThresholdLines() {
  if (!state.warnedComplexity && state.complexity >= 80) {
    state.warnedComplexity = true;
    setGremlin(state.ticket.complexityLine);
  }

  if (!state.warnedTenSeconds && state.time <= 10 && !state.ending) {
    state.warnedTenSeconds = true;
    setTemptation("ship now");
    setGremlin("Reality is approaching.");
  }
}

function endGame(key) {
  if (state.ending) {
    return;
  }

  state.ending = ENDINGS[key];
  state.shipped = key === "ugly";
  if (state.shipped) {
    session.shipped += 1;
  }
  state.modalOpen = false;
  closeResearchModal();
  queueRender();
}

function openResearchModal() {
  state.modalOpen = true;
  dom.modalTitle.textContent = `You read 4 articles about ${state.ticket.researchTopic}.`;
  dom.modalBody.innerHTML = `
    <p>No code changed.</p>
    <ul class="article-list">
      ${state.ticket.articles.map((article) => `<li>${escapeHtml(article)}</li>`).join("")}
    </ul>
  `;
  dom.modalLayer.classList.add("open");
  dom.modalLayer.setAttribute("aria-hidden", "false");
  dom.modalClose.focus();
}

function closeResearchModal() {
  state.modalOpen = false;
  dom.modalLayer.classList.remove("open");
  dom.modalLayer.setAttribute("aria-hidden", "true");
}

function getButtonLabel() {
  if (state.complexity >= 85) {
    return state.ticket.overbuiltLabel;
  }

  if (state.lastAction === "refactor") {
    return state.ticket.primitiveName;
  }

  if (state.lastAction === "abstract") {
    return `${state.ticket.targetLabel}Intent`;
  }

  if (state.lastAction === "research") {
    return `${state.ticket.targetLabel}*`;
  }

  if (state.lastAction === "redesign") {
    return state.ticket.targetLabel.toUpperCase();
  }

  return state.ticket.targetLabel;
}

function getPreviewCaption() {
  if (state.complexity >= 85) {
    return state.ticket.captions.overbuilt;
  }

  if (state.clicks.research >= 3) {
    return state.ticket.captions.research;
  }

  if (state.lastAction === "redesign") {
    return "It looks more intentional. This is not the same as done.";
  }

  if (state.lastAction === "research") {
    return "The button now has a footnote and exactly zero more functionality.";
  }

  if (state.lastAction === "abstract") {
    return "The button is becoming an interface to an interface.";
  }

  if (state.lastAction === "refactor") {
    return state.ticket.captions.refactor;
  }

  if (state.progress >= 40) {
    return state.ticket.captions.ready;
  }

  if (state.progress > 0) {
    return state.ticket.captions.progress;
  }

  return state.ticket.captions.idle;
}

function getButtonBadge() {
  if (state.complexity >= 85) {
    return "framework";
  }

  switch (state.lastAction) {
    case "code":
      return "works locally";
    case "research":
      return "4 citations";
    case "refactor":
      return "renamed";
    case "abstract":
      return "factory";
    case "redesign":
      return "visual pass";
    default:
      return "";
  }
}

function renderTicket() {
  dom.ticketId.textContent = state.ticket.id;
  dom.ticketTask.textContent = state.ticket.task;
  dom.ticketMeta.innerHTML = state.ticket.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
  dom.windowTitle.textContent = state.ticket.appTitle;
  dom.fakeTitleLabel.textContent = state.ticket.fieldLabel;
  dom.fakeTitle.value = state.ticket.fieldValue;
}

function renderFiles() {
  dom.fileList.innerHTML = state.files
    .map((file) => {
      const className = file === state.newFile ? " class=\"new-file\"" : "";
      return `<li${className}>${escapeHtml(file)}</li>`;
    })
    .join("");
  dom.fileCount.textContent = String(state.files.length);
}

function renderLog() {
  dom.eventLog.innerHTML = state.log
    .map((entry) => {
      const elapsed = Math.max(0, START_TIME - entry.time);
      return `
        <li>
          <time>t+${elapsed.toFixed(1)}s</time>
          <strong>${escapeHtml(entry.action)}</strong>
          <span>${escapeHtml(entry.detail)}</span>
        </li>
      `;
    })
    .join("");
}

function renderMeters() {
  dom.timeValue.textContent = `${state.time.toFixed(1)}s`;
  dom.timerFill.style.width = `${clamp((state.time / START_TIME) * 100)}%`;
  dom.timerFill.style.background = state.time <= 10 ? "var(--red)" : state.time <= 25 ? "var(--yellow)" : "var(--green)";

  dom.progressValue.textContent = percent(state.progress);
  dom.complexityValue.textContent = percent(state.complexity);
  dom.confidenceValue.textContent = percent(state.confidence);
  dom.progressFill.style.width = percent(state.progress);
  dom.complexityFill.style.width = percent(state.complexity);
  dom.confidenceFill.style.width = percent(state.confidence);
  dom.roundValue.textContent = String(session.attempts);
  dom.shippedValue.textContent = String(session.shipped);
  dom.temptationValue.textContent = state.temptation;
}

function renderPreview() {
  const hasButton = (state.progress > 0 || Boolean(state.lastAction)) && state.clicks.refactor < 3 && state.complexity < 96;
  const stageClasses = ["coded", "researched", "refactored", "abstracted", "redesigned"];
  dom.buttonSlot.classList.toggle("has-button", hasButton);
  stageClasses.forEach((className) => dom.buttonSlot.classList.remove(className));
  dom.buttonSlot.classList.toggle("coded", state.lastAction === "code");
  dom.buttonSlot.classList.toggle("researched", state.lastAction === "research");
  dom.buttonSlot.classList.toggle("refactored", state.lastAction === "refactor");
  dom.buttonSlot.classList.toggle("abstracted", state.lastAction === "abstract");
  dom.buttonSlot.classList.toggle("redesigned", state.lastAction === "redesign");
  dom.buttonSlot.classList.toggle("overbuilt", state.complexity >= 80);
  dom.buttonSlot.dataset.badge = getButtonBadge();
  dom.productWindow.classList.toggle("show-web", state.complexity >= 35);
  dom.uglyButton.textContent = getButtonLabel();
  dom.previewCaption.textContent = getPreviewCaption();
}

function renderGremlin() {
  dom.gremlinLine.textContent = `"${state.gremlin}"`;
  dom.gremlinMood.classList.toggle("warning", state.time <= 20 || state.complexity >= 55);
  dom.gremlinMood.classList.toggle("danger", state.time <= 10 || state.complexity >= 80);
}

function renderActions() {
  dom.abstractButton.classList.toggle("tempting", state.abstractTempting && !state.ending);
  dom.actions.forEach((button) => {
    button.disabled = Boolean(state.ending);
  });
}

function renderEnding() {
  if (!state.ending) {
    dom.endingLayer.classList.remove("open");
    dom.endingLayer.setAttribute("aria-hidden", "true");
    return;
  }

  dom.endingTitle.textContent = state.ending.title;
  dom.endingText.textContent = state.ending.text;
  dom.endingTicket.textContent = state.shipped ? `Closed: ${state.ticket.task}` : `Still open: ${state.ticket.task}`;
  dom.endingProgress.textContent = percent(state.progress);
  dom.endingComplexity.textContent = percent(state.complexity);
  dom.endingConfidence.textContent = percent(state.confidence);
  dom.endingLayer.classList.add("open");
  dom.endingLayer.setAttribute("aria-hidden", "false");
}

function render() {
  renderTicket();
  renderMeters();
  renderPreview();
  renderGremlin();
  renderFiles();
  renderLog();
  renderActions();
  renderEnding();
}

function queueRender() {
  if (renderQueued) {
    return;
  }

  renderQueued = true;
  window.requestAnimationFrame(() => {
    renderQueued = false;
    render();
  });
}

function tick(now) {
  const delta = (now - lastTick) / 1000;
  lastTick = now;

  if (!state.ending) {
    state.time = clamp(state.time - delta, 0, START_TIME);
    checkThresholdLines();
    if (state.time <= 0) {
      endGame("horizon");
    }
  }

  queueRender();
  window.requestAnimationFrame(tick);
}

function restart() {
  state = createInitialState();
  lastTick = performance.now();
  closeResearchModal();
  dom.endingLayer.classList.remove("open");
  dom.endingLayer.setAttribute("aria-hidden", "true");
  queueRender();
}

dom.actions.forEach((button) => {
  button.addEventListener("click", () => performAction(button.dataset.action));
});

dom.modalClose.addEventListener("click", closeResearchModal);
dom.modalLayer.addEventListener("click", (event) => {
  if (event.target === dom.modalLayer) {
    closeResearchModal();
  }
});

dom.restartButton.addEventListener("click", restart);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.modalOpen) {
    closeResearchModal();
  }
});

render();
window.requestAnimationFrame(tick);
