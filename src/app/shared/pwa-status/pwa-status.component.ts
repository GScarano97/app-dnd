import {Component,DestroyRef,inject,signal} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

interface InstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{outcome:'accepted'|'dismissed'}>;
}

@Component({selector:'app-pwa-status',standalone:true,templateUrl:'./pwa-status.component.html',styleUrl:'./pwa-status.component.css'})
export class PwaStatusComponent {
  private readonly updates=inject(SwUpdate);
  private readonly destroyRef=inject(DestroyRef);
  private installPrompt:InstallPromptEvent|null=null;
  readonly installAvailable=signal(false);
  readonly offline=signal(!navigator.onLine);
  readonly updateAvailable=signal(false);
  readonly iosHelp=signal(false);
  readonly showIosHelp=signal(false);

  constructor(){
    const installed=()=>window.matchMedia('(display-mode: standalone)').matches || (navigator as Navigator & {standalone?:boolean}).standalone === true;
    this.iosHelp.set(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!installed());
    const beforeInstall=(event:Event)=>{event.preventDefault();this.installPrompt=event as InstallPromptEvent;this.installAvailable.set(true)};
    const appInstalled=()=>{this.installPrompt=null;this.installAvailable.set(false);this.iosHelp.set(false)};
    const online=()=>this.offline.set(!navigator.onLine);
    window.addEventListener('beforeinstallprompt',beforeInstall);
    window.addEventListener('appinstalled',appInstalled);
    window.addEventListener('online',online);window.addEventListener('offline',online);
    this.destroyRef.onDestroy(()=>{window.removeEventListener('beforeinstallprompt',beforeInstall);window.removeEventListener('appinstalled',appInstalled);window.removeEventListener('online',online);window.removeEventListener('offline',online)});
    if(this.updates.isEnabled)this.updates.versionUpdates.pipe(takeUntilDestroyed()).subscribe(event=>{if(event.type==='VERSION_READY')this.updateAvailable.set(true)});
  }
  async install(){const event=this.installPrompt;if(!event)return;await event.prompt();await event.userChoice;this.installPrompt=null;this.installAvailable.set(false)}
  refresh(){window.location.reload()}
}
