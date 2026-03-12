# AvatarKit React

SpatialReal avatar components for React.

## Install

```bash
npx shadcn@latest add https://ui.spatialreal.ai/r/spatialreal-avatar.json
```

## Usage

```tsx
import {
  SpatialRealAvatarCanvas,
  SpatialRealAvatarError,
  SpatialRealAvatarFrame,
  SpatialRealAvatarLoading,
  SpatialRealAvatarProvider,
  SpatialRealAvatarStatus,
} from '@/components/spatialreal-avatar'

export function AgentAvatar({ token }: { token: string }) {
  return (
    <SpatialRealAvatarProvider
      appId={import.meta.env.VITE_SPATIALREAL_APP_ID}
      avatarId={import.meta.env.VITE_SPATIALREAL_AVATAR_ID}
      connection={{
        url: 'wss://your-livekit-host',
        token,
        roomName: 'voice-agent-room',
      }}
    >
      <SpatialRealAvatarFrame className="overflow-hidden">
        <SpatialRealAvatarCanvas className="min-h-[520px]" />
        <SpatialRealAvatarLoading />
        <SpatialRealAvatarError />
        <div className="absolute inset-x-0 top-0 flex justify-end p-4">
          <SpatialRealAvatarStatus />
        </div>
      </SpatialRealAvatarFrame>
    </SpatialRealAvatarProvider>
  )
}
```

## Develop

```bash
pnpm install
pnpm build:lib
pnpm registry:build
pnpm site:build
pnpm pages:build
```
