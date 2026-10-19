// Web Audio API Synthesizer for Authentic Temple Sounds
// Self-contained, zero-latency, zero-dependency devotional audio

class TempleAudioSynthesizer {
  private ctx: AudioContext | null = null;

  private getAudioContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }

  /**
   * Temple Bell (मंदिर की घंटी)
   * High-pitch brass bell with rich metallic harmonics and exponential decay
   */
  public playTempleBell(): void {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Fundamental and overtone frequencies of an Indian temple brass bell
    const frequencies = [852, 1280, 2040, 2750, 3600];
    const gains = [0.4, 0.25, 0.15, 0.08, 0.04];

    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      gainNode.gain.setValueAtTime(gains[idx], now);
      // Bell strike has immediate attack and long natural exponential decay
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 3.2);
    });
  }

  /**
   * Sacred Shankhnaad (दिव्य शंखनाद)
   * Resonant low-frequency brassy roar that swells and gently tapers
   */
  public playShankh(): void {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gainNode = ctx.createGain();

    // Sacred conch fundamental tone ~ 220Hz (A3) slightly rising to 235Hz
    osc1.type = "sawtooth";
    osc1.frequency.setValueAtTime(215, now);
    osc1.frequency.linearRampToValueAtTime(235, now + 0.8);
    osc1.frequency.setValueAtTime(235, now + 2.5);
    osc1.frequency.linearRampToValueAtTime(210, now + 3.5);

    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(430, now);
    osc2.frequency.linearRampToValueAtTime(470, now + 0.8);
    osc2.frequency.setValueAtTime(470, now + 2.5);
    osc2.frequency.linearRampToValueAtTime(420, now + 3.5);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(650, now);
    filter.frequency.linearRampToValueAtTime(1100, now + 1.2);
    filter.frequency.linearRampToValueAtTime(450, now + 3.5);

    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.linearRampToValueAtTime(0.35, now + 0.9); // smooth breath swell
    gainNode.gain.setValueAtTime(0.35, now + 2.4);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 3.6);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 3.6);
    osc2.stop(now + 3.6);
  }

  /**
   * Diya Ignition / Auspicious Chime (शुभ मंगल ध्वनि)
   */
  public playDiyaChime(): void {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (Swaras Sa, Ga, Pa, Sa)

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.12);

      const noteStart = now + i * 0.12;
      gainNode.gain.setValueAtTime(0.001, noteStart);
      gainNode.gain.linearRampToValueAtTime(0.2, noteStart + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, noteStart + 1.5);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(noteStart);
      osc.stop(noteStart + 1.5);
    });
  }

  /**
   * Agni Baan Whoosh & Victory Explosion for Ravan Dahan
   */
  public playArrowShoot(): void {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = "sawtooth";
    // Pitch rises and falls sharply like an arrow flying through air
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(1400, now + 0.3);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.6);

    gainNode.gain.setValueAtTime(0.05, now);
    gainNode.gain.linearRampToValueAtTime(0.3, now + 0.2);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.6);
  }

  /**
   * Victory Burst / Shankh celebration
   */
  public playVictoryFanfare(): void {
    this.playShankh();
    setTimeout(() => {
      this.playTempleBell();
    }, 400);
  }
}

export const templeAudio = new TempleAudioSynthesizer();
