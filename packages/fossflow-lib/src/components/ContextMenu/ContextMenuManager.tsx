import React, { useCallback, useMemo } from 'react';
import { useUiStateStore } from 'src/stores/uiStateStore';
import { generateId, findNearestUnoccupiedTile } from 'src/utils';
import { useScene } from 'src/hooks/useScene';
import { useModelStore } from 'src/stores/modelStore';
import { VIEW_ITEM_DEFAULTS } from 'src/config';
import { ContextMenu } from './ContextMenu';

interface Props {
  anchorEl?: HTMLElement | null;
}

export const ContextMenuManager = ({ anchorEl }: Props) => {
  const scene = useScene();
  const model = useModelStore((state) => {
    return state;
  });
  const contextMenu = useUiStateStore((state) => {
    return state.contextMenu;
  });

  const uiStateActions = useUiStateStore((state) => {
    return state.actions;
  });

  const onClose = useCallback(() => {
    uiStateActions.setContextMenu(null);
  }, [uiStateActions]);

  const menuItems = useMemo(() => {
    if (!contextMenu) return []
    if (contextMenu.type === 'SELECTION') {
      return [
        {
          label: 'Copy Selected',
          onClick: () => {
            alert('tryna copy')
            onClose();
          }
        }
      ]
    } else if (contextMenu.type === 'ITEM') {
      return [
        {
          label: `Copy ${contextMenu.item?.type}`,
          onClick: () => {
            alert('tryna copy')
            onClose();
          }
        }
      ]
    }
    return [
      {
        label: 'Add Node',
        onClick: () => {
          if (!contextMenu) return;
          if (model.icons.length > 0) {
            const modelItemId = generateId();
            const firstIcon = model.icons[0];
            
            // Find nearest unoccupied tile (should return the same tile since context menu is for empty tiles)
            const targetTile = findNearestUnoccupiedTile(contextMenu.tile, scene) || contextMenu.tile;

            scene.placeIcon({
              modelItem: {
                id: modelItemId,
                name: 'Untitled',
                icon: firstIcon.id
              },
              viewItem: {
                ...VIEW_ITEM_DEFAULTS,
                id: modelItemId,
                tile: targetTile
              }
            });
          }
          onClose();
        }
      },
      {
        label: 'Add Rectangle',
        onClick: () => {
          if (!contextMenu) return;
          if (model.colors.length > 0) {
            scene.createRectangle({
              id: generateId(),
              color: model.colors[0].id,
              from: contextMenu.tile,
              to: contextMenu.tile
            });
          }
          onClose();
        }
      }
    ]
  }, 
  [contextMenu && contextMenu.type, contextMenu?.item])

  return (
    <ContextMenu
      anchorEl={anchorEl}
      onClose={onClose}
      menuItems={menuItems}
    />
  );

  // Remove ITEM context menu since layer ordering only works for rectangles
  // and provides no value for regular diagram items

};
